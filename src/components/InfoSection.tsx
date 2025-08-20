import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, TrendingDown, RotateCcw, Calendar } from "lucide-react";

const InfoSection = () => {
  return (
    <section id="info" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Come Funzionano i Punti Patente</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Il sistema a punti premia i conducenti virtuosi e sanziona i comportamenti pericolosi.
            Ecco tutto quello che devi sapere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">20</span>
              </div>
              <CardTitle className="text-lg">Punti Iniziali</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ogni patente parte con 20 punti
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-warning/20 hover:border-warning/40 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-warning" />
              </div>
              <CardTitle className="text-lg">Decurtazioni</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Da 1 a 10 punti per violazione
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-success/20 hover:border-success/40 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-lg">Recupero</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Recuperi punti con corsi specifici
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-destructive/20 hover:border-destructive/40 transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="text-lg">Sospensione</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A 0 punti scatta la sospensione
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-warning" />
                Infrazioni Comuni
              </CardTitle>
              <CardDescription>
                Le violazioni che comportano perdita di punti
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Eccesso velocità (10-40 km/h)</span>
                <Badge variant="destructive">-3 punti</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Mancato uso cinture</span>
                <Badge variant="destructive">-5 punti</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Uso cellulare alla guida</span>
                <Badge variant="destructive">-5 punti</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Semaforo rosso</span>
                <Badge variant="destructive">-6 punti</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Guida in stato di ebbrezza</span>
                <Badge variant="destructive">-10 punti</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-success" />
                Recupero Automatico
              </CardTitle>
              <CardDescription>
                Come recuperare punti senza corsi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-success/10 rounded-lg">
                <h4 className="font-semibold text-success mb-2">Recupero Automatico</h4>
                <p className="text-sm">
                  Se non commetti infrazioni per 2 anni consecutivi, 
                  recuperi automaticamente i punti fino al massimo di 20.
                </p>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Bonus Virtuosi</h4>
                <p className="text-sm">
                  I neopatentati che non commettono infrazioni nei primi 3 anni 
                  ottengono un bonus di punti aggiuntivi.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;