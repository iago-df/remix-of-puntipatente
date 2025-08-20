import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, FileSearch, TrendingUp, Shield, Users, AlertTriangle } from "lucide-react";

const ServiceSection = () => {
  return (
    <section id="servizio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Come Funziona il Profilo di Rischio AI</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La nostra intelligenza artificiale analizza oltre 50 parametri per fornirti un profilo di rischio accurato 
            e completo di ogni potenziale locatario.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileSearch className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">1. Inserisci i Dati</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Numero patente e codice fiscale del guidatore
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-warning/20 hover:border-warning/40 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-warning" />
              </div>
              <CardTitle className="text-lg">2. Analisi AI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                L'AI elabora i dati in tempo reale
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-success/20 hover:border-success/40 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-lg">3. Ricevi il Report</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Profilo completo con score di rischio
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Cosa Analizza la nostra AI
              </CardTitle>
              <CardDescription>
                Parametri valutati dall'algoritmo di machine learning
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Storico infrazioni e violazioni</span>
                <Badge className="bg-primary">Priorità Alta</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Punti patente attuali e cronologia</span>
                <Badge className="bg-primary">Priorità Alta</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Frequenza e tipologia multe</span>
                <Badge variant="secondary">Priorità Media</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Età patente e esperienza</span>
                <Badge variant="secondary">Priorità Media</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Pattern comportamentali</span>
                <Badge className="bg-warning">Innovativo</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                Report Dettagliato
              </CardTitle>
              <CardDescription>
                Cosa ricevi con ogni verifica
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-success/10 rounded-lg">
                <h4 className="font-semibold text-success mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Score di Rischio 0-100
                </h4>
                <p className="text-sm">
                  Punteggio sintetico che indica il livello di rischio del guidatore
                </p>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Categoria di Rischio
                </h4>
                <p className="text-sm">
                  Classificazione: Basso, Medio, Alto, Critico
                </p>
              </div>
              <div className="p-4 bg-warning/10 rounded-lg">
                <h4 className="font-semibold text-warning mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Raccomandazioni
                </h4>
                <p className="text-sm">
                  Suggerimenti specifici per la decisione di noleggio
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;