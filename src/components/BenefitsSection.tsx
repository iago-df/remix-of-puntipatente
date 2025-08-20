import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, TrendingDown, Clock, Users, FileText, BarChart3, Lock, Award } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section id="vantaggi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Perché Scegliere il Nostro Servizio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Riduci i rischi, proteggi la tua flotta e prendi decisioni informate con la potenza dell'intelligenza artificiale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-lg">-40% Sinistri</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Riduci significativamente i sinistri selezionando guidatori a basso rischio
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">30 Secondi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Ottieni il profilo di rischio completo in meno di 30 secondi
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-warning" />
              </div>
              <CardTitle className="text-lg">95% Accuratezza</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Algoritmi di machine learning con oltre 95% di precisione predittiva
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-lg">GDPR Compliant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Piena conformità alle normative europee sulla privacy dei dati
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-success" />
                Vantaggi per il Business
              </CardTitle>
              <CardDescription>
                Come il nostro servizio migliora la tua attività
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Riduzione Costi Assicurativi</h4>
                  <p className="text-sm text-muted-foreground">
                    Meno sinistri = premi assicurativi più bassi per la tua flotta
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Protezione Reputazione</h4>
                  <p className="text-sm text-muted-foreground">
                    Evita danni reputazionali legati a incidenti gravi
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Conformità Normativa</h4>
                  <p className="text-sm text-muted-foreground">
                    Dimostra la dovuta diligenza nella selezione dei guidatori
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Sicurezza e Privacy
              </CardTitle>
              <CardDescription>
                I tuoi dati e quelli dei clienti sono al sicuro
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Crittografia End-to-End</h4>
                  <p className="text-sm text-muted-foreground">
                    Tutti i dati sono crittografati durante la trasmissione e l&apos;archiviazione
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Conformità GDPR</h4>
                  <p className="text-sm text-muted-foreground">
                    Piena aderenza al Regolamento Generale sulla Protezione Dati
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold mb-1">Audit e Certificazioni</h4>
                  <p className="text-sm text-muted-foreground">
                    Certificazioni ISO 27001 e SOC2 per la sicurezza informatica
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Oltre 500 Aziende si Fidano di Noi</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Rent-a-car, car sharing, flotte aziendali e noleggi a lungo termine utilizzano la nostra tecnologia 
              per ridurre i rischi e migliorare la sicurezza stradale.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="bg-background px-3 py-1 rounded-full">Hertz Italy</span>
              <span className="bg-background px-3 py-1 rounded-full">Europcar</span>
              <span className="bg-background px-3 py-1 rounded-full">Enjoy Car Sharing</span>
              <span className="bg-background px-3 py-1 rounded-full">LeasePlan</span>
              <span className="bg-background px-3 py-1 rounded-full">+ 496 altre</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BenefitsSection;