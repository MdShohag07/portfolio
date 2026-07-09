import Link from "next/link";
import { Muted, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type { Post } from "@/lib/data/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} data-cursor="interactive" className="group block">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div
          className={cn(
            "aspect-[16/10] w-full overflow-hidden rounded-(--radius-lg) border border-glass-border bg-gradient-to-br transition-transform duration-500 ease-(--ease-out) group-hover:scale-[1.01]",
            post.gradient
          )}
        />
        <div>
          <Muted className="uppercase tracking-[0.2em]">
            Featured · {post.category} · {post.readTime}
          </Muted>
          <Text className="mt-4 text-(length:--text-h1) font-semibold leading-[1.05] tracking-[-0.02em] text-foreground transition-colors group-hover:text-electric-soft">
            {post.title}
          </Text>
          <Text className="mt-4 max-w-lg">{post.excerpt}</Text>
          <Muted className="mt-4">{formatDate(post.date)}</Muted>
        </div>
      </div>
    </Link>
  );
}
