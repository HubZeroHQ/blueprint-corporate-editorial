import { Page, Section, Container } from "@/components/layout";
import { Typography } from "@/components/ui";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Insights, engineering practices, and architectural thinking.",
};

const posts = [
  {
    slug: "engineering-for-longevity",
    title: "Engineering for Longevity: Why Boring Technology Wins",
    date: "October 12, 2026",
    category: "Engineering",
    excerpt: "In an industry obsessed with the new, we've found that the most reliable, maintainable systems are built using proven, stable technologies."
  },
  {
    slug: "designing-with-typography",
    title: "The Hierarchy of Information: Typography in Enterprise Apps",
    date: "September 28, 2026",
    category: "Design",
    excerpt: "How a rigorous approach to typographic scale and rhythm can solve complex data density problems in enterprise interfaces."
  },
  {
    slug: "technical-due-diligence",
    title: "Beyond the Codebase: The Art of Technical Due Diligence",
    date: "September 15, 2026",
    category: "Strategy",
    excerpt: "What we look for when evaluating an architecture's ability to support long-term business objectives."
  }
];

export default function BlogPage() {
  return (
    <Page>
      <Section className="py-24 md:py-32">
        <Container>
          <div className="max-w-4xl flex flex-col gap-8 mb-24">
            <Typography variant="caption">Insights</Typography>
            <Typography variant="h1">
              Thoughts on engineering, design, and architecture.
            </Typography>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {posts.map((post) => (
              <article key={post.slug} className="group border-b border-stone-200 pb-16 last:border-0 last:pb-0">
                <Link href={`/blog/${post.slug}`} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                  <div className="md:col-span-3 flex flex-col gap-2">
                    <Typography variant="small" className="font-medium text-stone-900">{post.date}</Typography>
                    <Typography variant="small" className="text-stone-500 uppercase tracking-widest">{post.category}</Typography>
                  </div>
                  <div className="md:col-span-9 flex flex-col gap-4">
                    <Typography variant="h2" className="group-hover:text-stone-600 transition-colors">
                      {post.title}
                    </Typography>
                    <Typography variant="body" className="text-xl max-w-3xl">
                      {post.excerpt}
                    </Typography>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
