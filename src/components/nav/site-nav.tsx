"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { transition } from "@/lib/motion";
import { navLinks } from "@/lib/data/nav-links";
import { MenuToggle, MobileMenu } from "./mobile-menu";

export function SiteNav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-neon-yellow via-neon-pink to-transparent"
        style={{ opacity: borderOpacity }}
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
            className="glitch-hover text-(length:--text-body-lg) font-semibold tracking-[-0.02em] text-foreground"
          >
            NOVARA
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="interactive"
                className="group/link relative text-(length:--text-small) text-silver transition-colors hover:text-neon-yellow"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-neon-yellow to-neon-pink transition-transform duration-300 group-hover/link:scale-x-100" />
              </Link>
            ))}
          </nav>

          <Link href="/contact" data-cursor="interactive" className="hidden lg:block">
            <Button
              variant="secondary"
              size="md"
              magnetic={false}
              className="border-neon-yellow/40 text-neon-yellow hover:border-transparent hover:bg-gradient-to-r hover:from-neon-yellow hover:to-neon-pink hover:text-void hover:shadow-[var(--glow-pink)]"
            >
              Start a Project
            </Button>
          </Link>

          <MenuToggle open={menuOpen} onToggle={() => setMenuOpen((v) => !v)} />
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </motion.header>
  );
}
