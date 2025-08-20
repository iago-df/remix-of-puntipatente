import { Shield, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-bold">PuntiPatente.com</h3>
              <p className="text-sm opacity-80">Profili di rischio per noleggiatori</p>
            </div>
          </div>
          <p className="text-sm opacity-90 mb-4">
            Tecnologie AI innovative per valutare il rischio dei guidatori.
            Riduci sinistri e proteggi la tua flotta con analisi predittive avanzate.
          </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servizi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servizio" className="opacity-80 hover:opacity-100 transition-opacity">Analisi AI</a></li>
              <li><a href="#prezzi" className="opacity-80 hover:opacity-100 transition-opacity">Prezzi</a></li>
              <li><a href="#vantaggi" className="opacity-80 hover:opacity-100 transition-opacity">Vantaggi</a></li>
              <li><a href="#faq" className="opacity-80 hover:opacity-100 transition-opacity">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Aziende</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Rent-a-Car
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Car Sharing
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Flotte Aziendali</a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Noleggio Lungo Termine</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>800-123-456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@puntipatente.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Via Roma 123<br />00100 Roma, Italia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="opacity-80">
              © 2024 PuntiPatente.com - Tutti i diritti riservati
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Termini di Servizio</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;