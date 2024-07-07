import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/utils/faqData";

const Faq = () => {
  return (
    <section className="container py-4 text-center">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="mt-12">
        {faq.map((item) => (
          <AccordionItem value={item.value} key={item.value}>
            <AccordionTrigger className="text-start hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
