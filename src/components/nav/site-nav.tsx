"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { transition } from "@/lib/motion";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const borderOpacity = useTransform(scrollY, [0, 120], [0, 1]);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...transition.reveal, delay: 0.2 }}
    >
      <motion.div
        className="border-b backdrop-blur-xl transition-colors duration-300"
        style={{
          borderColor: "var(--color-glass-border)",
          opacity: borderOpacity,
        }}
      />
      <motion.div
        className="absolute inset-0 -z-10 backdrop-blur-xl transition-opacity duration-300"
        style={{ background: "var(--color-void)", opacity: scrolled ? 0.72 : 0 }}
        aria-hidden
      />
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            data-cursor="interactive"
            className="text-(length:--text-body-lg) font-semibold tracking-[-0.02em] text-foreground"
          >
            NOVARA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="interactive"
                className="text-(length:--text-small) text-silver transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" data-cursor="interactive" className="hidden md:block">
            <Button variant="secondary" size="md" magnetic={false}>
              Start a Project
            </Button>
          </Link>
        </div>
      </Container>
    </motion.header>
  );
}
