import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Muted } from "@/components/ui/typography";

const COLUMNS = [
  {
    title: "Studio",
    links: [
      { href: "/work", label: "Work" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/contact", label: "Contact" },
      { href: "mailto:hello@novara.studio", label: "hello@novara.studio" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-glass-border">
      <Container className="py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <span className="text-(length:--text-body-lg) font-semibold tracking-[-0.02em] text-foreground">
              NOVARA
            </span>
            <Muted className="mt-2 max-w-xs">Engineering the Future.</Muted>
          </div>

          <div className="flex flex-wrap gap-16">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <Muted className="uppercase tracking-[0.2em]">{col.title}</Muted>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        data-cursor="interactive"
                        className="text-(length:--text-small) text-silver transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-glass-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Muted>© {new Date().getFullYear()} NOVARA. All rights reserved.</Muted>
          <Muted>Built like it shipped from 2050.</Muted>
        </div>
      </Container>
    </footer>
  );
}
