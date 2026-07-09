"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Muted, Text } from "@/components/ui/typography";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Faq } from "@/lib/data/pricing";

function FaqItem({ faq, open, onToggle }: { faq: Faq; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-glass-border">
      <button
        type="button"
        onClick={onToggle}
        data-cursor="interactive"
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <Text className="text-foreground">{faq.question}</Text>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={transition.micro}
          className={cn(
            "shrink-0 text-(length:--text-h3) leading-none",
            open ? "text-electric-soft" : "text-muted"
          )}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={transition.glide}
            className="overflow-hidden"
          >
            <Muted className="max-w-2xl pb-6">{faq.answer}</Muted>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-glass-border">
      {faqs.map((faq, index) => (
        <FaqItem
          key={faq.question}
          faq={faq}
          open={openIndex === index}
          onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
        />
      ))}
    </div>
  );
}
