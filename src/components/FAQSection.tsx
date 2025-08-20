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
      question: "Come funziona l'analisi AI del profilo di rischio?",
      answer: "La nostra intelligenza artificiale analizza oltre 50 parametri inclusi storico infrazioni, punti patente, frequenza multe e pattern comportamentali per generare un score di rischio da 0 a 100 in tempo reale."
    },
    {
      question: "Quanto tempo ci vuole per ottenere il report?",
      answer: "Il profilo di rischio completo viene generato in meno di 30 secondi dall'inserimento dei dati. Riceverai immediatamente il report in formato PDF con score, categoria di rischio e raccomandazioni."
    },
    {
      question: "I dati dei clienti sono sicuri e conformi al GDPR?",
      answer: "Sì, siamo completamente conformi al GDPR. Tutti i dati sono crittografati end-to-end, non vengono conservati oltre il necessario e il cliente mantiene sempre il controllo sui propri dati personali."
    },
    {
      question: "Posso integrare il servizio nel mio sistema esistente?",
      answer: "Sì, offriamo API complete per l'integrazione nei pacchetti da 50+ verifiche. Il nostro team tecnico ti supporterà nell'integrazione con il tuo software di gestione noleggi."
    },
    {
      question: "Quanto è accurata la predizione del rischio?",
      answer: "Il nostro algoritmo di machine learning ha un'accuratezza superiore al 95% nella predizione del rischio di sinistri, validata su oltre 2 milioni di profili analizzati negli ultimi 3 anni."
    },
    {
      question: "Cosa succede se il guidatore non ha infrazioni?",
      answer: "Anche guidatori senza infrazioni ricevono un profilo completo. L'AI analizza l'esperienza di guida, l'età della patente e altri fattori per determinare comunque un livello di rischio accurato."
    },
    {
      question: "Posso utilizzare il servizio per guidatori stranieri?",
      answer: "Attualmente il servizio è ottimizzato per patenti italiane ed europee. Stiamo lavorando per estendere la copertura ad altre nazioni. Contattaci per esigenze specifiche."
    },
    {
      question: "Offrite supporto e formazione per utilizzare il servizio?",
      answer: "Sì, incluso nei pacchetti da 20+ verifiche c'è supporto prioritario e training per il tuo team. Per i pacchetti da 50+ assegniamo anche un account manager dedicato."
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
            Risposte alle domande più comuni sul nostro servizio di analisi AI per il rischio guidatori.
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