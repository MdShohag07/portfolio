import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Root layout metadata only sets openGraph/twitter once, and Next's shallow
 * merge means a page that doesn't repeat those blocks inherits the generic
 * homepage title/description into its social previews. This rebuilds them
 * per page so shares of /pricing, /work/[slug], etc. show that page's own
 * title and description instead of NOVARA's homepage copy.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      siteName: siteConfig.name,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
