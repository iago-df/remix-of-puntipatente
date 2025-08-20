import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Building, Clock } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="prezzi" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Prezzi Trasparenti</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scegli il piano più adatto al volume di verifiche della tua attività.
            Tutti i prezzi sono IVA esclusa.
          </p>
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-success to-success-light text-success-foreground rounded-lg p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-bold text-lg">OFFERTA LANCIO ITALIA</span>
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-lg mb-2">
            Le prime 20 verifiche a solo <span className="font-bold text-2xl">€3.99</span> ciascuna
          </p>
          <p className="text-sm opacity-90">
            Valida fino al 31 ottobre 2025 • Sconto del 50% rispetto al prezzo standard
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors relative">
            <Badge className="absolute -top-3 left-6 bg-success">Promo Attiva</Badge>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Verifica Singola</CardTitle>
              <CardDescription>Per test occasionali</CardDescription>
              <div className="mt-4">
                <div className="text-sm text-muted-foreground line-through">€7.99</div>
                <div className="text-4xl font-bold text-success">€3.99</div>
                <div className="text-sm text-muted-foreground">+ IVA per verifica</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Analisi AI completa</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Report dettagliato PDF</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-success" />
                <span className="text-sm">Score di rischio 0-100</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-success" />
                <span className="text-sm">Risultati in 30 secondi</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-success to-success-light mt-6">
                <Zap className="mr-2 h-4 w-4" />
                Inizia Subito
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Pacchetto 20</CardTitle>
              <CardDescription>Per piccole/medie attività</CardDescription>
              <div className="mt-4">
                <div className="text-4xl font-bold text-primary">€5.99</div>
                <div className="text-sm text-muted-foreground">+ IVA per verifica</div>
                <div className="text-xs text-muted-foreground mt-1">Totale: €119.80 + IVA</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Tutto del piano base</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Dashboard gestionale</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Storico verifiche</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">Supporto prioritario</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-primary-glow mt-6">
                <Building className="mr-2 h-4 w-4" />
                Scegli Pacchetto 20
              </Button>
            </CardContent>
          </Card>

          <Card className="border-accent/40 hover:border-accent/60 transition-colors relative">
            <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">Più Conveniente</Badge>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Pacchetto 50</CardTitle>
              <CardDescription>Per grandi flotte</CardDescription>
              <div className="mt-4">
                <div className="text-4xl font-bold text-accent-foreground">€4.99</div>
                <div className="text-sm text-muted-foreground">+ IVA per verifica</div>
                <div className="text-xs text-muted-foreground mt-1">Totale: €249.50 + IVA</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent-foreground" />
                <span className="text-sm">Tutto dei piani precedenti</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent-foreground" />
                <span className="text-sm">API per integrazione</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent-foreground" />
                <span className="text-sm">Report personalizzati</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent-foreground" />
                <span className="text-sm">Account manager dedicato</span>
              </div>
              <Button className="w-full bg-gradient-to-r from-accent to-warning mt-6">
                <Building className="mr-2 h-4 w-4" />
                Scegli Pacchetto 50
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Hai bisogno di più di 50 verifiche? Contattaci per un piano personalizzato.
          </p>
          <Button variant="outline" size="lg">
            Richiedi Preventivo Personalizzato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;