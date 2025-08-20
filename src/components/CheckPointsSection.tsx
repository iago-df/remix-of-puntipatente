import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, ExternalLink, Smartphone, Globe, FileText } from "lucide-react";

const CheckPointsSection = () => {
  return (
    <section id="controllo" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Controlla i Tuoi Punti</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esistono diversi modi per verificare il saldo dei punti della tua patente.
            Scegli il metodo più comodo per te.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Portale ACI</CardTitle>
              <CardDescription>
                Il modo più rapido e sicuro online
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Accedi al portale ufficiale dell'ACI con SPID o CIE
              </p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Vai al Portale ACI
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-success" />
              </div>
              <CardTitle>App iPatente</CardTitle>
              <CardDescription>
                Controlla dal tuo smartphone
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Scarica l'app ufficiale disponibile per iOS e Android
              </p>
              <Button variant="outline" className="w-full">
                <Smartphone className="mr-2 h-4 w-4" />
                Scarica App
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle>Via Posta</CardTitle>
              <CardDescription>
                Richiesta tramite raccomandata
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Invia richiesta scritta alla Motorizzazione
              </p>
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                Info Richiesta
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Simulatore Controllo Punti</CardTitle>
            <CardDescription>
              *Questo è solo un esempio dimostrativo. Per il controllo reale utilizza i canali ufficiali.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="patente">Numero Patente</Label>
                  <Input 
                    id="patente" 
                    placeholder="ES: AB1234567"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="nascita">Data di Nascita</Label>
                  <Input 
                    id="nascita" 
                    type="date"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-primary to-primary-glow">
                <Search className="mr-2 h-4 w-4" />
                Controlla Punti (Demo)
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>Per il controllo reale dei tuoi punti, utilizza esclusivamente:</p>
                <div className="flex justify-center space-x-4 mt-2">
                  <span className="font-semibold text-primary">• Portale ACI</span>
                  <span className="font-semibold text-success">• App iPatente</span>
                  <span className="font-semibold text-accent-foreground">• Motorizzazione</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CheckPointsSection;