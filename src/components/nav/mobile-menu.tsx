"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer, transition } from "@/lib/motion";
import { navLinks } from "@/lib/data/nav-links";

export function MenuToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      data-cursor="interactive"
      className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
    >
      <span className="relative block h-4 w-5">
        <motion.span
          className="absolute left-0 top-0 h-px w-full"
          animate={{
            rotate: open ? 45 : 0,
            y: open ? 7 : 0,
            backgroundColor: open ? "var(--color-neon-pink)" : "var(--color-foreground)",
          }}
          transition={transition.micro}
        />
        <motion.span
          className="absolute left-0 bottom-0 h-px w-full"
          animate={{
            rotate: open ? -45 : 0,
            y: open ? -7 : 0,
            backgroundColor: open ? "var(--color-neon-pink)" : "var(--color-foreground)",
          }}
          transition={transition.micro}
        />
      </span>
    </button>
  );
}

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const lenis = useLenis();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) lenis?.stop();
    else lenis?.start();
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition.glide}
          className="fixed inset-0 z-40 overflow-y-auto bg-void/95 backdrop-blur-xl lg:hidden"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-neon-pink/10 to-transparent animate-scan"
          />

          <motion.nav
            variants={staggerContainer(0.06, 0.15)}
            initial="hidden"
            animate="visible"
            className="flex min-h-full flex-col items-center justify-center gap-5 px-6 py-24"
          >
            {navLinks.map((link, index) => (
              <motion.div key={link.href} variants={fadeUp}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  data-cursor="interactive"
                  className="group/mlink flex items-baseline gap-3 text-(length:--text-h3) font-medium tracking-[-0.02em] text-foreground transition-colors hover:text-neon-yellow"
                >
                  <span className="font-mono text-(length:--text-micro) text-neon-pink/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="mt-4">
              <Link href="/contact" onClick={onClose} data-cursor="interactive">
                <Button
                  variant="primary"
                  className="bg-gradient-to-r from-neon-yellow to-neon-pink text-void shadow-[var(--glow-yellow)] hover:shadow-[var(--glow-pink)]"
                >
                  Start a Project
                </Button>
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
