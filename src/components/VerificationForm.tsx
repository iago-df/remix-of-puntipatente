import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Upload,
  Calendar,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

// ─── Config ───────────────────────────────────────────────────────────────────
const MAX_POLL_ATTEMPTS = 12;
const POLL_INTERVAL_MS = 10_000;

// ─── Helpers ──────────────────────────────────────────────────────────────────
function normalizeLicence(v: string) {
  return v.toUpperCase().replace(/\s+/g, "");
}

function normalizeDob(v: string) {
  // input type="date" gives YYYY-MM-DD → convert to DDMMYYYY
  if (!v) return "";
  const [y, m, d] = v.split("-");
  return `${d}${m}${y}`;
}

function extractPoints(text: string): number | null {
  const match = text.toLowerCase().match(/(\d{1,2})\s+punti/);
  return match ? Number(match[1]) : null;
}

function isInvalid(text: string) {
  return (
    text.toLowerCase().includes("non valido") ||
    text.toLowerCase().includes("non è corretto")
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────
type Status = "idle" | "starting" | "polling" | "done" | "error";

interface Result {
  points: number | null;
  transcript: string;
  invalid: boolean;
}

// ─── Component ────────────────────────────────────────────────────────────────
const VerificationForm = () => {
  const [dragActive, setDragActive] = useState(false);
  const [licenceNumber, setLicenceNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [result, setResult] = useState<Result | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [pollCount, setPollCount] = useState(0);

  // ── Drag handlers ────────────────────────────────────────────────────────
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  // ── Main verification flow ───────────────────────────────────────────────
  const handleVerify = async () => {
    const licence = normalizeLicence(licenceNumber);
    const dob = normalizeDob(birthDate);

    if (!licence || !dob) {
      setErrorMsg("Inserisci il numero di patente e la data di nascita.");
      setStatus("error");
      return;
    }

    setStatus("starting");
    setResult(null);
    setErrorMsg("");
    setPollCount(0);

    try {
      // 1. Start the job — llama a nuestra Vercel Function, no a la API directamente
      const startRes = await fetch("/api/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "start", licence, dob }),
      });

      if (!startRes.ok) {
        throw new Error(`Errore avvio: ${startRes.status}`);
      }

      const startData = await startRes.json();
      const jobId: string = startData.job_id;

      if (!jobId) throw new Error("Nessun job_id ricevuto");

      // 2. Poll for transcript
      setStatus("polling");

      for (let i = 0; i < MAX_POLL_ATTEMPTS; i++) {
        setPollCount(i + 1);
        await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));

        const pollRes = await fetch("/api/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "transcript", jobId }),
        });

        if (pollRes.ok) {
          const data = await pollRes.json();
          const transcript: string = data.text || data.transcript || "";

          setResult({
            points: extractPoints(transcript),
            transcript,
            invalid: isInvalid(transcript),
          });
          setStatus("done");
          return;
        }

        if (pollRes.status !== 404) {
          throw new Error(`Errore polling: ${pollRes.status}`);
        }
        // 404 = still processing → continue loop
      }

      setErrorMsg(
        "La verifica sta richiedendo più tempo del solito. Riprova tra qualche minuto."
      );
      setStatus("error");
    } catch (err: unknown) {
      setErrorMsg(
        err instanceof Error ? err.message : "Errore sconosciuto"
      );
      setStatus("error");
    }
  };

  const isLoading = status === "starting" || status === "polling";
  const canSubmit = licenceNumber.trim() !== "" && birthDate !== "" && !isLoading;

  const statusLabel = () => {
    if (status === "starting") return "Avvio verifica...";
    if (status === "polling")
      return `Elaborazione in corso... (${pollCount}/${MAX_POLL_ATTEMPTS})`;
    return null;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Verifica Cliente
            </h2>
            <p className="text-lg text-muted-foreground">
              Ottieni il profilo di rischio completo in 30 secondi
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Inizia la Verifica</CardTitle>
              <CardDescription>
                Scegli il metodo più comodo per verificare il tuo cliente
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* ── Left: file upload ── */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">
                      Carica qui la patente del cliente da verificare
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Carica fronte e retro della patente per l'analisi automatica
                    </p>
                  </div>

                  <div
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive
                        ? "border-primary bg-primary/5"
                        : "border-border"
                    }`}
                  >
                    <Upload className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
                    <p className="text-sm mb-1">
                      Trascina i file qui o clicca per selezionare
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      Formati supportati: JPG, PNG, PDF (max 10MB)
                    </p>
                    <Button variant="outline" size="sm">
                      Seleziona File
                    </Button>
                  </div>
                </div>

                {/* ── Right: manual entry ── */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">
                      Oppure inserisci qui direttamente il numero patente e la
                      data di nascita del cliente
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Verifica istantanea dei punti patente per profilo di
                      rischio dettagliato
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="licence">Numero Patente</Label>
                      <Input
                        id="licence"
                        placeholder="Es. AB1234567"
                        value={licenceNumber}
                        onChange={(e) => setLicenceNumber(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dob">Data di Nascita</Label>
                      <Input
                        id="dob"
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ── CTA ── */}
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleVerify}
                  disabled={!canSubmit}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {statusLabel()}
                    </>
                  ) : (
                    <>
                      <CreditCard className="mr-2 h-5 w-5" />
                      Verifica - €7.99 + IVA
                    </>
                  )}
                </Button>

                {/* Promo */}
                {status === "idle" && (
                  <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                    <div className="flex items-start gap-2">
                      <Calendar className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-sm">
                        <strong>Offerta Lancio:</strong> Prime 20 verifiche a
                        €3.99 invece di €7.99 (fino al 31/10/2025)
                      </p>
                    </div>
                  </div>
                )}

                {/* Resultado */}
                {status === "done" && result && (
                  <div>
                    {result.invalid ? (
                      <div className="rounded-lg bg-destructive/5 border border-destructive/20 p-4 flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                        <div>
                          <p className="font-semibold">
                            Patente o data di nascita non valida
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Verifica i dati inseriti e riprova.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-lg bg-green-500/5 border border-green-500/20 p-4 flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-semibold mb-1">
                            Verifica completata
                          </p>
                          {result.points !== null ? (
                            <p className="text-2xl font-bold">
                              {result.points}{" "}
                              <span className="text-base font-normal text-muted-foreground">
                                punti
                              </span>
                            </p>
                          ) : (
                            <p className="text-sm text-muted-foreground">
                              Punti non rilevati automaticamente.
                            </p>
                          )}
                          <details className="mt-3">
                            <summary className="cursor-pointer text-sm text-muted-foreground">
                              Mostra trascrizione completa
                            </summary>
                            <pre className="mt-2 text-xs whitespace-pre-wrap bg-muted p-3 rounded">
                              {result.transcript}
                            </pre>
                          </details>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Error */}
                {status === "error" && (
                  <div className="rounded-lg bg-destructive/5 border border-destructive/20 p-4 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
                    <p className="text-sm">{errorMsg}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VerificationForm;
