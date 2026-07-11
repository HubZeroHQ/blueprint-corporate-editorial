import { Page, Section, Container } from "@/components/layout";
import { Typography, Badge } from "@/components/ui";
import Image from "next/image";

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  return (
    <Page>
      <Section className="py-24 md:py-32">
        <Container>
          <div className="max-w-4xl flex flex-col gap-8 mb-16">
            <div className="flex gap-4">
              <Badge variant="secondary">Systems Engineering</Badge>
              <Badge variant="outline">2026</Badge>
            </div>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="lead" className="max-w-3xl">
              Modernizing legacy trading infrastructure to support a 10x increase in transaction volume.
            </Typography>
          </div>
          <div className="relative w-full aspect-[21/9] bg-stone-200">
            <Image src="/images/placeholders/work-logistics.jpg" alt={title} fill className="object-cover" priority />
          </div>
        </Container>
      </Section>

      <Section className="py-12 md:py-24 border-t border-stone-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            <div className="md:col-span-3 flex flex-col gap-8">
              <div>
                <Typography variant="caption" className="block mb-2">Client</Typography>
                <Typography variant="body" className="font-medium text-stone-900">{title}</Typography>
              </div>
              <div>
                <Typography variant="caption" className="block mb-2">Role</Typography>
                <Typography variant="body" className="font-medium text-stone-900">Architecture, Engineering</Typography>
              </div>
            </div>
            
            <div className="md:col-span-8 flex flex-col gap-12">
              <div>
                <Typography variant="h3" className="mb-6">The Objective</Typography>
                <Typography variant="body">
                  The client required a complete modernization of their core trading platform. The existing monolithic architecture could no longer scale to meet the demands of algorithmic trading desks, resulting in latency spikes during high-volatility events.
                </Typography>
              </div>
              <div>
                <Typography variant="h3" className="mb-6">The Solution</Typography>
                <Typography variant="body">
                  We designed and implemented a distributed, event-driven architecture. By decoupling the order matching engine from post-trade processing, we isolated critical latency paths. The new system handles 10x the previous volume with predictable, single-digit millisecond latency.
                </Typography>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
