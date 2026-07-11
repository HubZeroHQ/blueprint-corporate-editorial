import { Page, Section, Container } from "@/components/layout";
import { Typography, Button } from "@/components/ui";
import Image from "next/image";

export const metadata = {
  title: "Services",
  description: "Our core capabilities and areas of expertise.",
};

const services = [
  {
    id: "strategic-advisory",
    title: "Strategic Advisory",
    description: "Aligning digital initiatives with long-term business objectives through rigorous analysis, technical due diligence, and architectural planning.",
    features: ["Digital Transformation", "Technical Due Diligence", "Architecture Planning", "Vendor Selection"]
  },
  {
    id: "systems-engineering",
    title: "Systems Engineering",
    description: "Architecting resilient, scalable platforms designed to handle complexity without introducing fragility.",
    features: ["Cloud Native Architecture", "API Development", "Legacy Modernization", "Performance Optimization"]
  },
  {
    id: "experience-design",
    title: "Experience Design",
    description: "Crafting interfaces that communicate clearly, build trust, and simplify complicated interactions.",
    features: ["User Research", "Interface Design", "Design Systems", "Usability Testing"]
  }
];

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
            <div className="relative w-full aspect-[4/3] bg-stone-200 hidden lg:block">
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
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <Typography variant="h2">{service.title}</Typography>
                  <Typography variant="body" className="text-xl">
                    {service.description}
                  </Typography>
                  <div className="pt-4">
                    <Button href={`/services/${service.id}`} variant="outline">Learn more about {service.title}</Button>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:col-start-7 bg-stone-50 p-8 md:p-12 border border-stone-200">
                  <Typography variant="caption" className="block mb-6">Core Capabilities</Typography>
                  <ul className="flex flex-col gap-6">
                    {service.features.map((feature, i) => (
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
