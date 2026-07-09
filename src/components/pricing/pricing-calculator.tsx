"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Muted, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { addOns, projectTypes, tiers } from "@/lib/data/pricing";

function OptionCard({
  active,
  onClick,
  label,
  description,
  price,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  description: string;
  price?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-cursor="interactive"
      aria-pressed={active}
      className={cn(
        "w-full rounded-(--radius-md) border p-5 text-left transition-colors",
        active
          ? "border-electric-soft/60 bg-glass-strong"
          : "border-glass-border bg-glass hover:border-glass-border-strong"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <Text className="text-foreground">{label}</Text>
        {price && <Muted className="shrink-0 font-mono">{price}</Muted>}
      </div>
      <Muted className="mt-1">{description}</Muted>
    </button>
  );
}

export function PricingCalculator() {
  const [projectTypeId, setProjectTypeId] = useState(projectTypes[1].id);
  const [tierId, setTierId] = useState(tiers[0].id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const total = useMemo(() => {
    const projectType = projectTypes.find((p) => p.id === projectTypeId)!;
    const tier = tiers.find((t) => t.id === tierId)!;
    const addOnTotal = addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);
    return Math.round(projectType.base * tier.multiplier) + addOnTotal;
  }, [projectTypeId, tierId, selectedAddOns]);

  function toggleAddOn(id: string) {
    setSelectedAddOns((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  }

  return (
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className="grid gap-8 lg:grid-cols-[1fr_360px]"
    >
      <motion.div variants={fadeUp} className="space-y-10">
        <div>
          <Muted className="uppercase tracking-[0.2em]">Project Type</Muted>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {projectTypes.map((type) => (
              <OptionCard
                key={type.id}
                active={type.id === projectTypeId}
                onClick={() => setProjectTypeId(type.id)}
                label={type.label}
                description={type.description}
              />
            ))}
          </div>
        </div>

        <div>
          <Muted className="uppercase tracking-[0.2em]">Tier</Muted>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {tiers.map((tier) => (
              <OptionCard
                key={tier.id}
                active={tier.id === tierId}
                onClick={() => setTierId(tier.id)}
                label={tier.label}
                description={tier.description}
              />
            ))}
          </div>
        </div>

        <div>
          <Muted className="uppercase tracking-[0.2em]">Add-ons</Muted>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {addOns.map((addOn) => (
              <OptionCard
                key={addOn.id}
                active={selectedAddOns.includes(addOn.id)}
                onClick={() => toggleAddOn(addOn.id)}
                label={addOn.label}
                description={addOn.description}
                price={`+$${addOn.price.toLocaleString("en-US")}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeUp}>
        <GlassPanel className="sticky top-28 p-8" tilt={false}>
          <Muted className="uppercase tracking-[0.2em]">Estimated Investment</Muted>
          <div className="mt-3 flex items-baseline gap-1 whitespace-nowrap">
            <span className="text-3xl font-semibold text-foreground sm:text-4xl">$</span>
            <AnimatedNumber
              value={total}
              className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
            />
          </div>
          <Muted className="mt-2">Refined after a scoping call — this is a starting range.</Muted>
          <Link href="/contact" data-cursor="interactive" className="mt-6 block">
            <Button variant="primary" className="w-full">
              Get an Exact Quote
            </Button>
          </Link>
        </GlassPanel>
      </motion.div>
    </motion.div>
  );
}
