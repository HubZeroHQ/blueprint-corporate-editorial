import { Page, Section, Container } from "@/components/layout";
import { Typography, Card, CardImage, CardHeader, CardTitle, CardDescription } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Work & Case Studies",
  description: "A selection of our recent projects and outcomes.",
};

const works = [
  {
    slug: "vanguard-logistics",
    client: "Vanguard Logistics",
    category: "Systems Engineering",
    title: "Modernizing a global supply chain network.",
    description: "How we replaced a fragmented tracking system with a unified, real-time event architecture.",
    image: "/images/placeholders/work-logistics.jpg"
  },
  {
    slug: "oakhaven-health",
    client: "Oakhaven Health",
    category: "Experience Design",
    title: "Unifying clinical data across 40 hospitals.",
    description: "Designing an intuitive, compliant interface that reduced charting time by 30% for medical professionals.",
    image: "/images/placeholders/work-healthcare.jpg"
  },
  {
    slug: "fortis-capital",
    client: "Fortis Capital",
    category: "Strategic Advisory",
    title: "Technical due diligence for fintech acquisition.",
    description: "Evaluating the architectural resilience and scalability of a major payment processing platform.",
    image: "/images/placeholders/hero.jpg"
  },
  {
    slug: "aero-dynamics",
    client: "Aero Dynamics",
    category: "Systems Engineering",
    title: "Real-time telemetry analytics.",
    description: "Building a high-throughput data pipeline to process millions of IoT sensor readings per second for aviation.",
    image: "/images/placeholders/services.jpg"
  }
];

export default function WorkPage() {
  return (
    <Page>
      {/* Header */}
      <Section className="py-24 md:py-32 bg-stone-100">
        <Container>
          <div className="max-w-4xl flex flex-col gap-8">
            <Typography variant="caption">Our Work</Typography>
            <Typography variant="h1">
              Outcomes over output.
            </Typography>
            <Typography variant="lead" className="max-w-2xl">
              We measure our success by the stability, clarity, and value of the systems we deliver.
            </Typography>
          </div>
        </Container>
      </Section>

      {/* Case Studies Grid */}
      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {works.map((work) => (
              <Link key={work.slug} href={`/work/${work.slug}`} className="group">
                <Card className="h-full bg-transparent border-0 gap-6">
                  <CardImage className="aspect-[4/3] bg-stone-200 overflow-hidden relative">
                    <Image src={work.image} alt={work.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                  </CardImage>
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3 text-stone-500 text-sm font-medium tracking-wide">
                      <span>{work.client}</span>
                      <span className="w-1 h-1 rounded-full bg-stone-300" />
                      <span>{work.category}</span>
                    </div>
                    <CardTitle className="group-hover:text-stone-600 transition-colors">{work.title}</CardTitle>
                    <CardDescription>{work.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
