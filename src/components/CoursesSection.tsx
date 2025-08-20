import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Clock, Users, Award, MapPin, Calendar } from "lucide-react";

const CoursesSection = () => {
  return (
    <section id="corsi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Corsi di Recupero Punti</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recupera i punti persi con i nostri corsi certificati dal Ministero dei Trasporti.
            Modalità flessibili per adattarsi alle tue esigenze.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-success/20 hover:border-success/40 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Corso Base</CardTitle>
                <Badge className="bg-success">+6 Punti</Badge>
              </div>
              <CardDescription>
                Per chi ha perso fino a 15 punti
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">12 ore di lezione</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Max 25 partecipanti</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">3 giorni (4 ore/giorno)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Aule certificate in tutta Italia</span>
              </div>
              <div className="pt-4">
                <div className="text-3xl font-bold text-success mb-2">€ 280</div>
                <Button className="w-full bg-gradient-to-r from-success to-success-light">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Iscriviti al Corso Base
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Corso Avanzato</CardTitle>
                <Badge className="bg-primary">+9 Punti</Badge>
              </div>
              <CardDescription>
                Per chi ha perso 16+ punti o patente sospesa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">18 ore di lezione</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Max 20 partecipanti</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">5 giorni (3-4 ore/giorno)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Include test finale</span>
              </div>
              <div className="pt-4">
                <div className="text-3xl font-bold text-primary mb-2">€ 420</div>
                <Button className="w-full bg-gradient-to-r from-primary to-primary-glow">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Iscriviti al Corso Avanzato
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Cosa Include il Corso</CardTitle>
            <CardDescription>
              Tutti i nostri corsi sono progettati per essere efficaci e coinvolgenti
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Docenti Qualificati</h4>
                <p className="text-sm text-muted-foreground">
                  Istruttori certificati con esperienza pluriennale
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-success" />
                </div>
                <h4 className="font-semibold mb-2">Certificazione</h4>
                <p className="text-sm text-muted-foreground">
                  Attestato riconosciuto dal Ministero dei Trasporti
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
                <h4 className="font-semibold mb-2">Orari Flessibili</h4>
                <p className="text-sm text-muted-foreground">
                  Corsi mattutini, pomeridiani e serali
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <h4 className="font-semibold mb-2">Sedi Comode</h4>
                <p className="text-sm text-muted-foreground">
                  Aule in tutte le principali città
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CoursesSection;