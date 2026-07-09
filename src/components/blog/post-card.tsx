import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Muted, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type { Post } from "@/lib/data/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} data-cursor="interactive" className="block h-full">
      <GlassPanel className="h-full">
        <div className={cn("aspect-[16/10] w-full bg-gradient-to-br", post.gradient)} />
        <div className="p-6">
          <Muted className="uppercase tracking-[0.2em]">
            {post.category} · {post.readTime}
          </Muted>
          <Text className="mt-3 text-(length:--text-h3) font-medium text-foreground">{post.title}</Text>
          <Muted className="mt-3">{formatDate(post.date)}</Muted>
        </div>
      </GlassPanel>
    </Link>
  );
}
