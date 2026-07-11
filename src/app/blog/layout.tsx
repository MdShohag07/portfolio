import { SiteNav } from "@/components/nav/site-nav";
import { Footer } from "@/components/layout/footer";
import { Starfield } from "@/components/backgrounds/starfield";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="relative">
        <div className="fixed inset-0 -z-10">
          <Starfield />
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
