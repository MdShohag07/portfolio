import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function PostBody({ children }: { children: React.ReactNode }) {
  return (
    <Section className="pt-12">
      <Container>
        <div className="mx-auto max-w-2xl">{children}</div>
      </Container>
    </Section>
  );
}
