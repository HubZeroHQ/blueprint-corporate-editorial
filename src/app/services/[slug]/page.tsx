import { notFound } from "next/navigation";
import { Page, Section, Container } from "@/components/layout";
import { Typography, Button } from "@/components/ui";
import { services } from "@/config/content";
import { createMetadata } from "@/seo/createMetadata";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = services.find((item) => item.slug === slug);
  return service ? createMetadata({ title: service.title, description: service.summary, canonical: `/services/${slug}` }) : {};
}
export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = services.find((item) => item.slug === slug); if (!service) notFound();
  return <Page>
    <Section className="page-opening bg-stone-100"><Container><div className="editorial-intro"><Typography variant="caption">Service</Typography><Typography variant="h1">{service.title}</Typography><Typography variant="lead">{service.summary}</Typography></div></Container></Section>
    <Section><Container><div className="grid gap-12 md:grid-cols-12 md:gap-10"><aside className="md:col-span-4"><Typography variant="caption" className="mb-5 block">Capabilities</Typography><ul className="divide-y divide-stone-300 border-y border-stone-300">{service.capabilities.map(x=><li key={x} className="py-4 text-sm font-medium">{x}</li>)}</ul></aside><div className="space-y-14 md:col-span-7 md:col-start-6"><div><Typography variant="h2" className="mb-5">The challenge</Typography><Typography variant="body">{service.challenge}</Typography></div><div><Typography variant="h2" className="mb-5">Our approach</Typography><Typography variant="body">{service.approach}</Typography></div><div className="border-l-2 border-stone-900 pl-6"><Typography variant="caption" className="mb-3 block">Expected outcome</Typography><Typography variant="h3">{service.outcome}</Typography></div><Button href="/contact" size="lg">Discuss this service</Button></div></div></Container></Section>
  </Page>;
}
