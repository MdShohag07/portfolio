import { Starfield } from "@/components/backgrounds/starfield";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Section } from "@/components/ui/section";
import { Display, Eyebrow, H1, H2, H3, Lead, Muted, Text } from "@/components/ui/typography";

const colorSwatches: Array<{ name: string; className: string; value: string }> = [
  { name: "void", className: "bg-void border border-glass-border", value: "#030304" },
  { name: "void-soft", className: "bg-void-soft border border-glass-border", value: "#08090c" },
  { name: "graphite", className: "bg-graphite border border-glass-border", value: "#0e0f13" },
  { name: "graphite-2", className: "bg-graphite-2 border border-glass-border", value: "#16171d" },
  { name: "foreground", className: "bg-foreground", value: "#f3f4f6" },
  { name: "silver", className: "bg-silver", value: "#c8ccd4" },
  { name: "muted", className: "bg-muted", value: "#8a8f98" },
  { name: "faint", className: "bg-faint", value: "#55585f" },
  { name: "electric", className: "bg-electric", value: "#2f7cff" },
  { name: "electric-soft", className: "bg-electric-soft", value: "#6fa8ff" },
  { name: "cyber", className: "bg-cyber", value: "#8b5cf6" },
  { name: "cyber-soft", className: "bg-cyber-soft", value: "#b48cff" },
];

const typeScale: Array<{ label: string; token: string; sample: string }> = [
  { label: "Display", token: "--text-display", sample: "Build the future" },
  { label: "H1", token: "--text-h1", sample: "Build the future" },
  { label: "H2", token: "--text-h2", sample: "Build the future" },
  { label: "H3", token: "--text-h3", sample: "Build the future" },
];

export default function DesignSystemPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 -z-10">
        <Starfield />
      </div>

      <Section className="pb-16">
        <Container>
          <Eyebrow>Design System</Eyebrow>
          <Display className="mt-6">2050</Display>
          <Lead className="mt-6 max-w-2xl">
            The token set, motion language, and component primitives every page on this site is
            assembled from. This route is a working reference, not a shipped page.
          </Lead>
        </Container>
      </Section>

      {/* Color */}
      <Section className="py-16">
        <Container>
          <Eyebrow>Color</Eyebrow>
          <H2 className="mt-4 mb-10">Deep space, glass, electric light</H2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {colorSwatches.map((swatch) => (
              <div key={swatch.name} className="space-y-2">
                <div className={`h-20 rounded-(--radius-md) ${swatch.className}`} />
                <Text className="!text-(length:--text-small) text-foreground">{swatch.name}</Text>
                <Muted className="font-mono">{swatch.value}</Muted>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Typography */}
      <Section className="py-16">
        <Container>
          <Eyebrow>Typography</Eyebrow>
          <H2 className="mt-4 mb-10">Massive, minimal, confident</H2>
          <div className="space-y-10">
            {typeScale.map((row) => (
              <div key={row.label} className="border-b border-glass-border pb-8">
                <Muted className="mb-2 font-mono">
                  {row.label} · {row.token}
                </Muted>
                <p
                  className="font-semibold leading-[0.95] tracking-[-0.03em] text-foreground"
                  style={{ fontSize: `var(${row.token})` }}
                >
                  {row.sample}
                </p>
              </div>
            ))}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Muted className="mb-2 font-mono">Lead</Muted>
                <Lead>Combining Apple, Linear, Nothing, Vercel, and Stripe into something new.</Lead>
              </div>
              <div>
                <Muted className="mb-2 font-mono">Body</Muted>
                <Text>
                  A futuristic operating system instead of a webpage — every scroll creates a
                  cinematic transition, every card has depth.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section className="py-16">
        <Container>
          <Eyebrow>Buttons</Eyebrow>
          <H2 className="mt-4 mb-10">Magnetic, glowing, deliberate</H2>
          <div className="flex flex-wrap items-center gap-6">
            <Button variant="primary">Start Project</Button>
            <Button variant="secondary">View Works</Button>
            <Button variant="ghost">Learn more</Button>
            <Button variant="primary" size="md">
              Small primary
            </Button>
          </div>
        </Container>
      </Section>

      {/* Glass panels */}
      <Section className="py-16">
        <Container>
          <Eyebrow>Surfaces</Eyebrow>
          <H2 className="mt-4 mb-10">Glass panels &amp; depth</H2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Software Development", "AI Automation", "Brand Identity"].map((title) => (
              <GlassPanel key={title} className="p-8">
                <H3>{title}</H3>
                <Text className="mt-3">
                  Move the pointer across this card — the tilt, the light sweep, and the border
                  all respond together.
                </Text>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </Section>

      {/* Motion */}
      <Section className="py-16">
        <Container>
          <Eyebrow>Motion</Eyebrow>
          <H2 className="mt-4 mb-10">One language, everywhere</H2>
          <div className="grid gap-4 font-mono text-(length:--text-small) text-muted sm:grid-cols-3">
            <div className="rounded-(--radius-md) border border-glass-border bg-glass p-6">
              ease.out — [0.16, 1, 0.3, 1]
              <br />
              entrances &amp; reveals
            </div>
            <div className="rounded-(--radius-md) border border-glass-border bg-glass p-6">
              ease.inOut — [0.65, 0, 0.35, 1]
              <br />
              section transitions
            </div>
            <div className="rounded-(--radius-md) border border-glass-border bg-glass p-6">
              ease.snap — [0.34, 1.56, 0.64, 1]
              <br />
              hover / press
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pt-0 pb-32">
        <Container>
          <H1 className="max-w-3xl">
            Consistent tokens now mean every page from here builds itself faster.
          </H1>
        </Container>
      </Section>
    </main>
  );
}
