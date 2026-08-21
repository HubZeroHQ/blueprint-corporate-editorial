import { Page, Section, Container } from "@/components/layout";
import { Typography, Button, Card, CardImage, CardHeader, CardTitle, Reveal } from "@/components/ui";
import Image from "next/image";
import { services, work } from "@/config/content";

export default function Home() {
  return (
    <Page>
      {/* Hero Section */}
      <Section className="py-24 md:py-32 lg:py-40 mt-16">
        <Container>
          <Reveal>
            <div className="max-w-4xl flex flex-col gap-8">
            <Typography variant="caption">Meridian Group</Typography>
            <Typography variant="h1">
              Building clarity from complexity.
            </Typography>
            <Typography variant="lead" className="max-w-2xl">
              We design and engineer enterprise solutions that bring predictability to complex environments. Elegance is our signature.
            </Typography>
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 pt-6 md:pt-4 w-full md:w-auto">
              <Button href="/work" size="lg" className="w-full md:w-auto h-14 md:h-12 text-base">Explore our work</Button>
              <Button href="/about" variant="ghost" size="lg" className="w-full md:w-auto h-14 md:h-12 text-base border border-stone-200 md:border-none">Our philosophy</Button>
            </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Identity / Mission */}
      <Section className="bg-stone-100 py-24 md:py-32 border-y border-stone-200">
        <Container>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <Typography variant="h2" className="mb-6">
                Purpose-built for the long term.
              </Typography>
              <Typography variant="body" className="mb-6">
                Our approach to software and design prioritizes maintainability, clarity, and structural integrity. We don&apos;t believe in temporary solutions to permanent problems.
              </Typography>
              <Typography variant="body">
                By focusing on the fundamentals—excellent typography, clear information architecture, and robust engineering—we create digital experiences that earn trust instantly and age gracefully.
              </Typography>
            </div>
            <div className="bg-stone-200 aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative overflow-hidden rounded-2xl shadow-sm">
              <Image src="/images/placeholders/hero.jpg" alt="Meridian Group Headquarters" fill className="object-cover" priority />
            </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Services Preview */}
      <Section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-stone-200 pb-8">
              <div className="max-w-xl">
                <Typography variant="caption" className="block mb-4">Capabilities</Typography>
                <Typography variant="h2">Expertise across disciplines.</Typography>
              </div>
              <Button href="/services" variant="outline" className="w-full md:w-auto h-12">View all services</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {services.map((service, i) => (
                <div key={i} className="flex flex-col gap-4 group">
                  <div className="h-[1px] w-full bg-stone-200 group-hover:bg-stone-900 transition-colors duration-500" />
                  <Typography variant="h4">{service.title}</Typography>
                  <Typography variant="body" className="text-stone-600">{service.summary}</Typography>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Recent Work */}
      <Section className="bg-stone-900 text-stone-50 py-24 md:py-32">
        <Container>
          <div className="flex flex-col gap-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-stone-800 pb-8">
              <div className="max-w-xl">
                <Typography variant="caption" className="block mb-4 text-stone-400">Featured Work</Typography>
                <Typography variant="h2" className="text-stone-50">Proven outcomes.</Typography>
              </div>
              <Button href="/work" variant="outline" className="w-full md:w-auto h-12 border-stone-700 text-stone-50 hover:bg-stone-800 hover:text-stone-50">
                View portfolio
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              {work.slice(0, 2).map((item) => (
                <Card key={item.slug} className="bg-transparent gap-6 group">
                  <CardImage className="aspect-[4/5] md:aspect-[4/3] bg-stone-800">
                    <Image src={item.image} alt="" fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                  </CardImage>
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-3 text-stone-400 text-sm font-medium tracking-wide">
                      <span>{item.client}</span>
                      <span className="w-1 h-1 rounded-full bg-stone-600" />
                      <span>{item.category}</span>
                    </div>
                    <CardTitle className="text-stone-50 text-3xl">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
