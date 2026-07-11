import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { SiteNav } from "@/components/nav/site-nav";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Display, Eyebrow, H2, Lead } from "@/components/ui/typography";
import { AmbientSceneLazy } from "@/components/three/ambient-scene-loader";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { CalendarBooking } from "@/components/contact/calendar-booking";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Start a project with NOVARA — send a message or book a call.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="relative">
        <div className="fixed inset-0 -z-10">
          <AmbientSceneLazy />
        </div>

        <Section className="pb-0">
          <Container>
            <Eyebrow>Contact</Eyebrow>
            <Display className="mt-6 max-w-3xl">Let&apos;s start a conversation.</Display>
            <Lead className="mt-6 max-w-xl">
              Send the details, or skip straight to booking a call — either way we reply within
              one business day.
            </Lead>
          </Container>
        </Section>

        <Section>
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              <ContactForm />
              <ContactInfo />
            </div>
          </Container>
        </Section>

        <Section className="border-t border-glass-border">
          <Container>
            <H2 className="max-w-xl">Prefer to talk it through?</H2>
            <div className="mt-10">
              <CalendarBooking />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
