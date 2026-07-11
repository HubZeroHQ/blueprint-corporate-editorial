import { Page, Section, Container } from "@/components/layout";
import { Typography, Quote } from "@/components/ui";
import Image from "next/image";
export const metadata = {
  title: "About",
  description: "Learn about our philosophy, history, and the team behind the work.",
};

export default function AboutPage() {
  return (
    <Page>
      {/* Header */}
      <Section className="py-24 md:py-32 bg-stone-900 text-stone-50">
        <Container>
          <div className="max-w-3xl flex flex-col gap-6">
            <Typography variant="h1" className="text-stone-50">
              We believe in doing things right the first time.
            </Typography>
            <Typography variant="lead" className="text-stone-400">
              Since our founding, we have remained committed to one simple idea: excellent engineering and thoughtful design create lasting value.
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4">
              <Typography variant="caption" className="sticky top-28">Our Story</Typography>
            </div>
            <div className="md:col-span-8 max-w-2xl flex flex-col gap-8">
              <Typography variant="h3">
                A tradition of excellence.
              </Typography>
              <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-stone-200 my-4 rounded-2xl overflow-hidden shadow-sm">
                <Image src="/images/placeholders/about.jpg" alt="Executive Meeting Space" fill className="object-cover" />
              </div>
              <div className="prose prose-stone prose-lg">
                <Typography variant="body">
                  We started with the realization that most enterprise software is built for the short term. It solves immediate problems but introduces long-term complexity, fragility, and maintenance burdens.
                </Typography>
                <Typography variant="body" className="mt-6">
                  Meridian Group was built to offer an alternative. We prioritize structural integrity, readable code, clear design systems, and architectures that can evolve without requiring a complete rebuild every few years.
                </Typography>
              </div>
              <Quote author="Arthur Pendelton" role="Managing Partner" className="my-8">
                Good software shouldn&apos;t feel like a compromise. It should feel like a perfectly crafted tool that gets out of your way and lets you do your best work.
              </Quote>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="py-24 bg-stone-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4">
              <Typography variant="caption" className="sticky top-28">Our Values</Typography>
            </div>
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                {[
                  { title: "Clarity over cleverness", desc: "We write code and design interfaces that are easy to understand, maintain, and extend." },
                  { title: "Long-term thinking", desc: "We build systems that are designed to last years, not months." },
                  { title: "Elegance as a standard", desc: "We believe that well-engineered software naturally looks and feels elegant." },
                  { title: "Honest communication", desc: "We tell our clients what they need to hear, not just what they want to hear." }
                ].map((value, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <Typography variant="h4">{value.title}</Typography>
                    <Typography variant="body">{value.desc}</Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
