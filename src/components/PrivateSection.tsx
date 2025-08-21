import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, Clock, FileText, Check } from "lucide-react";

const PrivateSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">Per Privati</Badge>
          <h2 className="text-4xl font-bold mb-4">Scopri il Tuo Saldo Punti Patente</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Verifica in modo semplice e veloce il tuo saldo punti patente. 
            Carica la tua patente e ottieni il risultato in soli 2 minuti.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-secondary/40 hover:border-secondary/60 transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Verifica Saldo Punti</CardTitle>
              <CardDescription className="text-lg">
                Servizio veloce e sicuro per privati
              </CardDescription>
              <div className="mt-6">
                <div className="text-5xl font-bold text-secondary mb-2">€2.99</div>
                <div className="text-sm text-muted-foreground">+ IVA per verifica</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="text-center border-secondary/20">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Upload className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">1. Carica Patente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Carica una foto fronte/retro della tua patente di guida
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-secondary/20">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">2. Elaborazione</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      La nostra AI elabora i dati in 2 minuti
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center border-secondary/20">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">3. Risultato</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Ricevi il saldo punti patente aggiornato
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg mb-3">Cosa Ricevi:</h4>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    <span className="text-sm">Saldo punti patente attuale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    <span className="text-sm">Cronologia decurtazioni</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    <span className="text-sm">Date scadenze importanti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" />
                    <span className="text-sm">Report PDF scaricabile</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg mb-3">Vantaggi:</h4>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Nessuna registrazione richiesta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Dati sicuri e crittografati</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Risultato in soli 2 minuti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Conformità GDPR garantita</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-secondary-light">
                  <Upload className="mr-2 h-5 w-5" />
                  Verifica Ora - €2.99
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Servizio sicuro, veloce e completamente automatizzato
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrivateSection;