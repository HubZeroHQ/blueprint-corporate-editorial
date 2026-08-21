import { Page, Section, Container } from "@/components/layout";
import { Typography, Button } from "@/components/ui";
import Image from "next/image";
import { services } from "@/config/content";

export const metadata = {
  title: "Services",
  description: "Our core capabilities and areas of expertise.",
};

export default function ServicesPage() {
  return (
    <Page>
      {/* Header */}
      <Section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl flex flex-col gap-8">
              <Typography variant="caption">Our Services</Typography>
              <Typography variant="h1">
                Disciplined approaches to complex problems.
              </Typography>
              <Typography variant="lead">
                We bring structure, engineering rigor, and design excellence to enterprise challenges.
              </Typography>
            </div>
            <div className="relative w-full aspect-[4/5] lg:aspect-[4/3] bg-stone-200 rounded-2xl overflow-hidden shadow-sm mt-8 lg:mt-0">
              <Image src="/images/placeholders/services.jpg" alt="Engineering Collaboration" fill className="object-cover" priority />
            </div>
          </div>
        </Container>
      </Section>

      {/* Services List */}
      <Section className="py-12 md:py-24 border-t border-stone-200">
        <Container>
          <div className="flex flex-col gap-24">
            {services.map((service) => (
              <div key={service.slug} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <Typography variant="h2">{service.title}</Typography>
                  <Typography variant="body" className="text-xl">
                    {service.summary}
                  </Typography>
                  <div className="pt-4">
                    <Button href={`/services/${service.slug}`} variant="outline" className="w-full md:w-auto h-12">Learn more about {service.title}</Button>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 bg-stone-50 p-8 md:p-12 border border-stone-200 rounded-3xl shadow-sm">
                  <Typography variant="caption" className="block mb-6">Core Capabilities</Typography>
                  <ul className="flex flex-col gap-6">
                    {service.capabilities.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                        <Typography variant="h4" className="text-xl">{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
