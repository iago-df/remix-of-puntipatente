import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, CheckCircle, AlertTriangle, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-glow to-accent text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Riduci i Rischi del{" "}
              <span className="bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">
                Noleggio Auto
              </span>{" "}
              con l'AI
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Verifica istantanea dei punti patente e profilo di rischio dettagliato per ogni cliente con intelligenza artificiale. 
              Proteggi la tua flotta e riduci i sinistri.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-success hover:bg-success-light text-success-foreground shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Inizia da €3.99
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur"
              >
                <Shield className="mr-2 h-5 w-5" />
                Come Funziona
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6">
              <Shield className="h-12 w-12 text-accent mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Analisi AI Avanzata</h3>
              <p className="opacity-80">
                Intelligenza artificiale analizza storico infrazioni e comportamenti di guida
              </p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6">
              <Users className="h-12 w-12 text-success-light mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Profilo Completo</h3>
              <p className="opacity-80">
                Rapporto dettagliato con score di rischio e raccomandazioni
              </p>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur border-white/20 p-6">
              <AlertTriangle className="h-12 w-12 text-warning mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Decisioni Informate</h3>
              <p className="opacity-80">
                Approva o rifiuta noleggi basandoti su dati concreti
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;