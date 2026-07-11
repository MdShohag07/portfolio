import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Display, Eyebrow, Muted } from "@/components/ui/typography";
import { getPost } from "@/lib/data/posts";
import { siteConfig } from "@/lib/site-config";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function PostHeader({ slug }: { slug: string }) {
  const post = getPost(slug);
  if (!post) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${siteConfig.url}/blog/${slug}`,
    author: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <Section className="pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <Eyebrow>
          {post.category} · {post.readTime}
        </Eyebrow>
        <Display className="mt-6 max-w-3xl !text-(length:--text-h1)">{post.title}</Display>
        <Muted className="mt-6">{formatDate(post.date)}</Muted>
      </Container>
    </Section>
  );
}
