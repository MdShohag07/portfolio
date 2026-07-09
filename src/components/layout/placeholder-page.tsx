import { SiteNav } from "@/components/nav/site-nav";
import { Starfield } from "@/components/backgrounds/starfield";
import { Container } from "@/components/ui/container";
import { Display, Eyebrow, Lead } from "@/components/ui/typography";

export function PlaceholderPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <SiteNav />
      <main className="relative flex min-h-svh items-center">
        <div className="fixed inset-0 -z-10">
          <Starfield />
        </div>
        <Container>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Display className="mt-6 max-w-3xl">{title}</Display>
          <Lead className="mt-6 max-w-xl">{description}</Lead>
        </Container>
      </main>
    </>
  );
}
