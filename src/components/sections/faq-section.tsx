import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { FaqAccordion } from "@/components/pricing/faq-accordion";
import { generalFaqs } from "@/lib/data/faq";

export function FaqSection() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>FAQ</Eyebrow>
        <H2 className="mt-4 max-w-xl">Questions worth answering upfront.</H2>
        <div className="mt-12 max-w-2xl">
          <FaqAccordion faqs={generalFaqs} />
        </div>
      </Container>
    </Section>
  );
}
