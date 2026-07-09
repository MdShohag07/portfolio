import { SiteNav } from "@/components/nav/site-nav";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
      </main>
    </>
  );
}
