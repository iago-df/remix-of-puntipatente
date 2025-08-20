import { Button } from "@/components/ui/button";
import { Shield, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">PuntiPatente.com</h1>
              <p className="text-xs text-muted-foreground">Profili di rischio per noleggiatori</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#servizio" className="text-foreground hover:text-primary transition-colors">
              Il Servizio
            </a>
            <a href="#prezzi" className="text-foreground hover:text-primary transition-colors">
              Prezzi
            </a>
            <a href="#vantaggi" className="text-foreground hover:text-primary transition-colors">
              Vantaggi
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Phone className="h-4 w-4 mr-2" />
              Contatti
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg">
              Prova Gratis
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;