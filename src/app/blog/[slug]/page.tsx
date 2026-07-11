import { Page, Section, Container } from "@/components/layout";
import { Typography, Quote } from "@/components/ui";

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <Page>
      <Section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-stone-200">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col gap-8 text-center items-center">
            <Typography variant="caption">Engineering</Typography>
            <Typography variant="h1">{title}</Typography>
            <div className="flex items-center gap-4 text-sm text-stone-500 font-medium">
              <span>By Arthur Pendelton</span>
              <span className="w-1 h-1 rounded-full bg-stone-300" />
              <span>October 12, 2026</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-stone prose-lg prose-headings:font-serif prose-headings:font-medium prose-p:leading-relaxed prose-p:text-stone-700">
              <Typography variant="lead" className="mb-12 text-stone-900 font-medium">
                In an industry obsessed with the new, we&apos;ve found that the most reliable, maintainable systems are built using proven, stable technologies.
              </Typography>
              
              <p>
                Every few months, a new framework, paradigm, or architectural pattern promises to solve all of our engineering problems. We are told that if we just adopt this new tool, we will move faster, build better software, and never have to deal with legacy code again.
              </p>
              
              <p>
                But experience tells a different story. 
              </p>

              <h2>The Cost of Novelty</h2>
              
              <p>
                The primary cost of software is not in writing it, but in reading it, maintaining it, and changing it over time. When we choose novelty over stability, we incur a tax that must be paid by every engineer who works on the system in the future.
              </p>

              <Quote author="Arthur Pendelton" role="Managing Partner" className="not-prose my-16">
                Boring technology is a competitive advantage. It allows you to spend your innovation budget on the business domain, not the infrastructure.
              </Quote>

              <h2>Designing for the Next Decade</h2>
              
              <p>
                When building systems that need to last, we prioritize tools that have crossed the chasm of hype and settled into widespread, productive use. We look for large communities, stable APIs, and extensive documentation.
              </p>
              
              <p>
                This isn&apos;t about rejecting progress. It&apos;s about recognizing that the fundamental constraints of software engineering—complexity, state management, and clear communication—are rarely solved by a new syntax.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
