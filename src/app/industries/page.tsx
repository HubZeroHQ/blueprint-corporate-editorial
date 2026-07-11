import { Page, Section, Container } from "@/components/layout";
import { Typography } from "@/components/ui";
import Image from "next/image";

export const metadata = {
  title: "Industries",
  description: "Sectors we serve with specialized expertise.",
};

const industries = [
  {
    title: "Financial Services",
    description: "Modernizing core banking, trading platforms, and wealth management systems with high-availability architectures.",
  },
  {
    title: "Healthcare",
    description: "Building secure, compliant data platforms that prioritize patient privacy and clinical workflow efficiency.",
  },
  {
    title: "Logistics",
    description: "Optimizing global supply chains through real-time analytics and resilient distributed systems.",
  },
  {
    title: "Enterprise SaaS",
    description: "Scaling architectures for high-growth software companies managing complex tenant requirements.",
  }
];

export default function IndustriesPage() {
  return (
    <Page>
      <Section className="py-24 md:py-32 bg-stone-900 text-stone-50">
        <Container>
          <div className="max-w-4xl flex flex-col gap-8 mb-16">
            <Typography variant="caption" className="text-stone-400">Industries</Typography>
            <Typography variant="h1" className="text-stone-50">
              Domain expertise matters.
            </Typography>
            <Typography variant="lead" className="max-w-2xl text-stone-400">
              We understand the regulatory, scaling, and architectural constraints unique to complex industries.
            </Typography>
          </div>
          <div className="relative w-full aspect-[21/9] bg-stone-800 rounded-2xl overflow-hidden shadow-sm">
            <Image src="/images/placeholders/industries.jpg" alt="Industries" fill className="object-cover opacity-80" priority />
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {industries.map((industry) => (
              <div key={industry.title} className="flex flex-col gap-6">
                <div className="h-[1px] w-full bg-stone-200" />
                <Typography variant="h2">{industry.title}</Typography>
                <Typography variant="body" className="text-xl text-stone-600">
                  {industry.description}
                </Typography>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
