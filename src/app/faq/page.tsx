import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/utils/faqData";
import Image from "next/image";
import DigiBiteLogo from "/public/DigiBiteLogo.png";
import Link from "next/link";
const Faq = () => {
  return (
    <section className="container py-4 text-center">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
      <div className="relative flex items-center justify-center">
        <Link
          href="/"
          className="absolute left-0 rounded-sm bg-primary px-3 py-1 text-sm font-semibold text-white transition active:scale-110"
        >
          Go back
        </Link>
        <div className="relative aspect-video h-[50px] w-[120px]">
          <Image
            src={DigiBiteLogo}
            alt="DigiBite Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <Accordion type="single" collapsible className="">
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
