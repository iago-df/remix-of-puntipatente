import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, Calendar, CreditCard } from "lucide-react";

const VerificationForm = () => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-primary-glow/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Verifica Cliente</h2>
            <p className="text-muted-foreground">
              Ottieni il profilo di rischio completo in 30 secondi
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Inizia la Verifica</CardTitle>
              <CardDescription>
                Scegli il metodo più comodo per verificare il tuo cliente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="upload" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Carica Patente
                  </TabsTrigger>
                  <TabsTrigger value="manual" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Inserimento Manuale
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="upload" className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Carica qui la patente del cliente da verificare</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Carica fronte e retro della patente per l'analisi automatica
                    </p>
                  </div>
                  
                  <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      dragActive 
                        ? "border-primary bg-primary/5" 
                        : "border-muted-foreground/25 hover:border-primary/50"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">
                      Trascina i file qui o clicca per selezionare
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Formati supportati: JPG, PNG, PDF (max 10MB)
                    </p>
                    <Button variant="outline">
                      Seleziona File
                    </Button>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-glow" size="lg">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Verifica - €3.99
                  </Button>
                </TabsContent>

                <TabsContent value="manual" className="space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2">Inserisci qui direttamente i dati del cliente</h3>
                    <p className="text-sm text-muted-foreground">
                      Numero patente e data di nascita per la verifica istantanea
                    </p>
                  </div>
                  
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="license-number">Numero Patente</Label>
                      <Input 
                        id="license-number" 
                        placeholder="Es: AB1234567CD"
                        className="text-center text-lg font-mono"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="birth-date">Data di Nascita</Label>
                      <Input 
                        id="birth-date" 
                        type="date"
                        className="text-center"
                      />
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-glow" size="lg">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Verifica - €3.99
                  </Button>
                </TabsContent>
              </Tabs>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    <strong>Offerta Lancio:</strong> Prime 20 verifiche a €3.99 invece di €7.99 (fino al 31/10/2025)
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VerificationForm;