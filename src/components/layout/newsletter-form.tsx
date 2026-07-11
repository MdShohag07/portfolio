"use client";

import { useState } from "react";
import { fieldClasses } from "@/components/ui/field";
import { Muted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "invalid" | "success">("idle");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("invalid");
      return;
    }
    // No backend wired up yet — this is where a real subscribe endpoint goes.
    setStatus("success");
  }

  if (status === "success") {
    return <Muted className="text-electric-soft">You&apos;re on the list.</Muted>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "invalid") setStatus("idle");
        }}
        placeholder="you@company.com"
        aria-label="Email address"
        aria-invalid={status === "invalid"}
        className={cn(fieldClasses, "h-11", status === "invalid" && "border-danger/60")}
      />
      <button
        type="submit"
        data-cursor="interactive"
        className="h-11 shrink-0 rounded-(--radius-md) border border-glass-border-strong bg-glass px-4 text-(length:--text-small) text-foreground transition-colors hover:border-electric-soft/60 hover:bg-glass-strong"
      >
        Join
      </button>
    </form>
  );
}
