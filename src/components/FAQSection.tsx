import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanti punti ho sulla mia patente?",
      answer: "Puoi controllare i tuoi punti attraverso il portale ACI, l'app iPatente o presso gli uffici della Motorizzazione. Il controllo è gratuito e immediato con SPID o CIE."
    },
    {
      question: "Cosa succede se arrivo a 0 punti?",
      answer: "Con 0 punti la patente viene sospesa. Dovrai frequentare un corso di recupero punti e sostenere l'esame di revisione per riottenere la patente."
    },
    {
      question: "Posso recuperare punti senza corso?",
      answer: "Sì, se non commetti infrazioni per 2 anni consecutivi recuperi automaticamente tutti i punti fino al massimo di 20. È il sistema di recupero automatico."
    },
    {
      question: "Quanto costa un corso di recupero punti?",
      answer: "I costi variano: il corso base (6 punti) costa circa €280, quello avanzato (9 punti) circa €420. I prezzi possono variare tra le diverse autoscuole."
    },
    {
      question: "Ogni quanto posso fare un corso?",
      answer: "Puoi frequentare un corso di recupero punti una volta ogni due anni, a meno che la patente non sia stata sospesa per azzeramento punti."
    },
    {
      question: "Le multe arrivano subito ai punti?",
      answer: "La decurtazione avviene solo dopo il pagamento della multa o la definizione del ricorso. Fino ad allora i punti rimangono invariati."
    },
    {
      question: "Posso guidare con patente sospesa?",
      answer: "No, guidare con patente sospesa è un reato penale punibile con ammenda e arresto. Il veicolo viene sequestrato e confiscato in caso di recidiva."
    },
    {
      question: "Come funziona per i neopatentati?",
      answer: "I neopatentati partono con 20 punti ma subiscono decurtazioni doppie nei primi 3 anni. Chi non commette infrazioni ottiene un bonus di punti aggiuntivi."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Domande Frequenti</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Risposte alle domande più comuni sui punti patente e sui corsi di recupero.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="p-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;