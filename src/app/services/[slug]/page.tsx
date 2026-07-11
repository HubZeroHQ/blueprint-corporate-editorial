import { Page, Section, Container } from "@/components/layout";
import { Typography, Button } from "@/components/ui";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // In a real application, fetch the service data based on the slug.
  const serviceTitle = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <Page>
      <Section className="py-24 md:py-32 bg-stone-100">
        <Container>
          <div className="max-w-4xl flex flex-col gap-8">
            <Typography variant="caption">Service</Typography>
            <Typography variant="h1">{serviceTitle}</Typography>
            <Typography variant="lead" className="max-w-2xl">
              We bring structure, engineering rigor, and design excellence to enterprise challenges.
            </Typography>
          </div>
        </Container>
      </Section>

      <Section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="bg-stone-50 p-8 border border-stone-200">
                <Typography variant="caption" className="block mb-4">Key Benefits</Typography>
                <ul className="flex flex-col gap-4">
                  <li className="font-medium text-stone-900">Improved Reliability</li>
                  <li className="font-medium text-stone-900">Scalable Architecture</li>
                  <li className="font-medium text-stone-900">Reduced Technical Debt</li>
                </ul>
              </div>
              <Button href="/contact" size="lg" className="w-full">Discuss this service</Button>
            </div>
            
            <div className="md:col-span-8 md:pl-12 flex flex-col gap-12">
              <div>
                <Typography variant="h2" className="mb-6">The Challenge</Typography>
                <Typography variant="body" className="mb-4">
                  Enterprises often struggle with legacy systems that cannot adapt to modern requirements. Maintaining these systems diverts resources from innovation and introduces unnecessary fragility.
                </Typography>
              </div>
              <div>
                <Typography variant="h2" className="mb-6">Our Approach</Typography>
                <Typography variant="body" className="mb-4">
                  We conduct a thorough audit of existing infrastructure before proposing architectural changes. Our implementation prioritizes zero-downtime migrations, strong typing, and comprehensive test coverage.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
