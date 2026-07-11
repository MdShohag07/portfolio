"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { FieldWrapper, fieldClasses } from "@/components/ui/field";
import { Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { transition } from "@/lib/motion";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): Partial<Record<keyof FormState, string>> {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.projectType) errors.projectType = "Select a project type.";
  if (!values.budget) errors.budget = "Select a budget range.";
  if (values.message.trim().length < 10) errors.message = "Tell us a little more (10+ characters).";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleBlur(field: keyof FormState) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  }

  function handleChange(field: keyof FormState, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched[field]) setErrors(validate(next));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, projectType: true, budget: true, message: true });
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // No backend wired up yet — this is where a real submission endpoint goes.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  }

  function a11yProps(field: keyof FormState) {
    const hasError = Boolean(touched[field] && errors[field]);
    return {
      required: true,
      "aria-invalid": hasError,
      "aria-describedby": hasError ? `${field}-error` : undefined,
    } as const;
  }

  if (status === "success") {
    return (
      <GlassPanel className="p-8 text-center" tilt={false}>
        <Text className="text-(length:--text-h3) font-medium text-foreground">Message sent.</Text>
        <Text className="mt-2">We reply within one business day. Talk soon.</Text>
      </GlassPanel>
    );
  }

  return (
    <GlassPanel className="p-8" tilt={false}>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FieldWrapper label="Name" htmlFor="name" error={touched.name ? errors.name : undefined}>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleBlur("name")}
              className={cn(fieldClasses, touched.name && errors.name && "border-danger/60")}
              autoComplete="name"
              {...a11yProps("name")}
            />
          </FieldWrapper>

          <FieldWrapper label="Email" htmlFor="email" error={touched.email ? errors.email : undefined}>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleBlur("email")}
              className={cn(fieldClasses, touched.email && errors.email && "border-danger/60")}
              autoComplete="email"
              {...a11yProps("email")}
            />
          </FieldWrapper>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FieldWrapper
            label="Project Type"
            htmlFor="projectType"
            error={touched.projectType ? errors.projectType : undefined}
          >
            <select
              id="projectType"
              value={values.projectType}
              onChange={(e) => handleChange("projectType", e.target.value)}
              onBlur={() => handleBlur("projectType")}
              className={cn(fieldClasses, touched.projectType && errors.projectType && "border-danger/60")}
              {...a11yProps("projectType")}
            >
              <option value="">Select one</option>
              <option value="website">Marketing Website</option>
              <option value="webapp">Web Application</option>
              <option value="mobile">Mobile App</option>
              <option value="ai">AI Automation</option>
              <option value="other">Other</option>
            </select>
          </FieldWrapper>

          <FieldWrapper label="Budget" htmlFor="budget" error={touched.budget ? errors.budget : undefined}>
            <select
              id="budget"
              value={values.budget}
              onChange={(e) => handleChange("budget", e.target.value)}
              onBlur={() => handleBlur("budget")}
              className={cn(fieldClasses, touched.budget && errors.budget && "border-danger/60")}
              {...a11yProps("budget")}
            >
              <option value="">Select a range</option>
              <option value="under-10k">Under $10k</option>
              <option value="10k-25k">$10k – $25k</option>
              <option value="25k-50k">$25k – $50k</option>
              <option value="50k-plus">$50k+</option>
            </select>
          </FieldWrapper>
        </div>

        <FieldWrapper label="Message" htmlFor="message" error={touched.message ? errors.message : undefined}>
          <textarea
            id="message"
            rows={5}
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            className={cn(fieldClasses, "resize-none", touched.message && errors.message && "border-danger/60")}
            {...a11yProps("message")}
          />
        </FieldWrapper>

        <AnimatePresence>
          {status === "submitting" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition.micro}
            >
              <Text className="text-muted">Sending…</Text>
            </motion.div>
          )}
        </AnimatePresence>

        <Button type="submit" variant="primary" className="w-full" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>
      </form>
    </GlassPanel>
  );
}
