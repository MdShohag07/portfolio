import Link from "next/link";
import { Starfield } from "@/components/backgrounds/starfield";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Display, Eyebrow, Lead } from "@/components/ui/typography";

// Placeholder landing — the real cinematic hero lands in Phase 2.
export default function Home() {
  return (
    <main className="relative flex min-h-svh flex-1 items-center">
      <div className="fixed inset-0 -z-10">
        <Starfield />
      </div>
      <Container>
        <Eyebrow>Phase 1 · Design System</Eyebrow>
        <Display className="mt-6 max-w-4xl">A futuristic operating system, not a webpage.</Display>
        <Lead className="mt-6 max-w-xl">
          The design system is live. Homepage, case studies, and the rest of the experience build
          on top of it next.
        </Lead>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/design-system" data-cursor="interactive">
            <Button variant="primary">View Design System</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
