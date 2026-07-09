import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Lead, Muted } from "@/components/ui/typography";
import { TechSphereSceneLazy } from "@/components/three/tech-sphere-scene-loader";

export function TechStackSection() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>Technology</Eyebrow>
        <H2 className="mt-4 max-w-xl">One stack, built to move fast.</H2>
        <Lead className="mt-4 max-w-lg">
          Drag to spin it. Every tool here has shipped production work — nothing on this list is
          there to look impressive.
        </Lead>
      </Container>

      <div className="relative mt-4 h-[480px] w-full sm:h-[560px]">
        <TechSphereSceneLazy />
      </div>
      <Container>
        <Muted className="text-center">Drag to rotate</Muted>
      </Container>
    </Section>
  );
}
