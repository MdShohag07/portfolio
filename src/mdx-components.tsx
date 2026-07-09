import type { MDXComponents } from "mdx/types";
import { H2, H3, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <H2 as="h2" className="mt-16 mb-6" {...props} />,
    h3: (props) => <H3 as="h3" className="mt-10 mb-4" {...props} />,
    p: (props) => <Text className="mt-6 first:mt-0" {...props} />,
    // Rendered as a div, not <p> — MDX parses its children as a markdown
    // paragraph internally, so a <p>-based Lead here would hydration-error
    // on nested <p> tags.
    Lead: (props) => (
      <div
        className="mt-6 text-(length:--text-body-lg) leading-relaxed text-silver [&>p]:m-0"
        {...props}
      />
    ),
    a: ({ className, ...props }) => (
      <a
        className={cn("text-electric-soft underline underline-offset-4 hover:text-foreground", className)}
        {...props}
      />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "mt-8 border-l-2 border-electric-soft/60 pl-6 text-(length:--text-h3) font-medium leading-snug text-foreground",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn("mt-6 list-disc space-y-2 pl-6 text-silver", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("mt-6 list-decimal space-y-2 pl-6 text-silver", className)} {...props} />
    ),
    // No border/background here — those render as one box per wrapped
    // line on an inline element. Block code gets its container from `pre`
    // below; this stays a bare inline color/font treatment.
    code: ({ className, ...props }) => (
      <code
        className={cn("font-mono text-(length:--text-small) text-electric-soft", className)}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "mt-6 overflow-x-auto rounded-(--radius-md) border border-glass-border bg-glass p-4 text-(length:--text-small) leading-relaxed",
          className
        )}
        {...props}
      />
    ),
    hr: (props) => <hr className="mt-12 border-glass-border" {...props} />,
    ...components,
  };
}
