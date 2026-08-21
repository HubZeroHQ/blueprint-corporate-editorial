import { Page, Section, Container } from "@/components/layout";
import { Typography } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@/config/content";

export const metadata = {
  title: "Industries",
  description: "Sectors we serve with specialized expertise.",
};

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
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-stone-800 overflow-hidden">
            <Image src="/images/placeholders/industries.jpg" alt="Industries" fill className="object-cover opacity-80" priority />
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {industries.map((industry) => (
              <Link href={`/industries/${industry.slug}`} key={industry.title} className="flex flex-col gap-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-4">
                <div className="h-[1px] w-full bg-stone-200" />
                <Typography variant="h2" className="group-hover:text-stone-600">{industry.title}</Typography>
                <Typography variant="body" className="text-xl text-stone-600">
                  {industry.summary}
                </Typography>
                <span className="text-sm font-medium">Read sector perspective →</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
