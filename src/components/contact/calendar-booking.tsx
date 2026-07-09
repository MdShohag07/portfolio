"use client";

import { useMemo, useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { Muted, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const SLOTS = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "4:30 PM"];

function buildDays() {
  const days: { label: string; date: number; iso: string; full: string }[] = [];
  const today = new Date();
  for (let i = 1; i <= 6; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push({
      label: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate(),
      iso: date.toISOString(),
      full: date.toLocaleDateString("en-US", { month: "long", day: "numeric" }),
    });
  }
  return days;
}

export function CalendarBooking() {
  const days = useMemo(() => buildDays(), []);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed && selectedDay !== null && selectedSlot) {
    return (
      <GlassPanel className="p-8 text-center" tilt={false}>
        <Text className="text-(length:--text-h3) font-medium text-foreground">Call booked.</Text>
        <Text className="mt-2">
          {days[selectedDay].full} at {selectedSlot}. A confirmation would be emailed here.
        </Text>
      </GlassPanel>
    );
  }

  return (
    <GlassPanel className="p-8" tilt={false}>
      <Muted className="uppercase tracking-[0.2em]">Pick a day</Muted>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {days.map((day, index) => (
          <button
            key={day.iso}
            type="button"
            onClick={() => {
              setSelectedDay(index);
              setSelectedSlot(null);
            }}
            data-cursor="interactive"
            className={cn(
              "rounded-(--radius-md) border px-3 py-3 text-center transition-colors",
              selectedDay === index
                ? "border-electric-soft/60 bg-glass-strong"
                : "border-glass-border bg-glass hover:border-glass-border-strong"
            )}
          >
            <div className="text-(length:--text-small) text-muted">{day.label}</div>
            <div className="mt-1 text-foreground">{day.date}</div>
          </button>
        ))}
      </div>

      {selectedDay !== null && (
        <div className="mt-6">
          <Muted className="uppercase tracking-[0.2em]">Available times</Muted>
          <div className="mt-4 flex flex-wrap gap-2">
            {SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedSlot(slot)}
                data-cursor="interactive"
                className={cn(
                  "rounded-(--radius-full) border px-4 py-2 text-(length:--text-small) transition-colors",
                  selectedSlot === slot
                    ? "border-electric-soft/60 bg-glass-strong text-foreground"
                    : "border-glass-border bg-glass text-silver hover:border-glass-border-strong"
                )}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedDay !== null && selectedSlot && (
        <Button variant="primary" className="mt-6 w-full" onClick={() => setConfirmed(true)}>
          Confirm {days[selectedDay].full} at {selectedSlot}
        </Button>
      )}
    </GlassPanel>
  );
}
