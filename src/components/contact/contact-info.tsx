import { FiGithub, FiInstagram, FiLinkedin, FiMapPin, FiTwitter } from "react-icons/fi";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Muted, Text } from "@/components/ui/typography";

const SOCIALS = [
  { icon: FiTwitter, label: "Twitter / X", href: "https://twitter.com" },
  { icon: FiLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FiGithub, label: "GitHub", href: "https://github.com" },
  { icon: FiInstagram, label: "Instagram", href: "https://instagram.com" },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <GlassPanel className="p-6" tilt={false}>
        <div className="flex items-start gap-3">
          <FiMapPin className="mt-1 shrink-0 text-electric-soft" size={18} />
          <div>
            <Text className="text-foreground">Remote-first studio</Text>
            <Muted className="mt-1">Working across time zones — Kuwait City &amp; distributed.</Muted>
          </div>
        </div>
      </GlassPanel>

      <GlassPanel className="p-6" tilt={false}>
        <Muted className="uppercase tracking-[0.2em]">Elsewhere</Muted>
        <div className="mt-4 space-y-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="flex items-center gap-3 text-silver transition-colors hover:text-foreground"
            >
              <social.icon size={16} />
              <Text className="text-inherit">{social.label}</Text>
            </a>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}
