import { Page, Section, Container } from "@/components/layout";
import { Typography, Button } from "@/components/ui";
import Image from "next/image";

export const metadata = {
  title: "Careers",
  description: "Join our team of engineers and designers.",
};

const positions = [
  {
    title: "Senior Systems Engineer",
    department: "Engineering",
    location: "San Francisco / Remote",
    type: "Full-time"
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "New York / Remote",
    type: "Full-time"
  },
  {
    title: "Technical Lead",
    department: "Engineering",
    location: "London / Remote",
    type: "Full-time"
  }
];

export default function CareersPage() {
  return (
    <Page>
      <Section className="py-24 md:py-32 bg-stone-900 text-stone-50">
        <Container>
          <div className="max-w-4xl flex flex-col gap-8 mb-16">
            <Typography variant="caption" className="text-stone-400">Careers</Typography>
            <Typography variant="h1" className="text-stone-50">
              Do the best work of your career.
            </Typography>
            <Typography variant="lead" className="max-w-2xl text-stone-400">
              We are always looking for disciplined, thoughtful practitioners who value craftsmanship and long-term thinking.
            </Typography>
          </div>
          <div className="relative w-full aspect-[21/9] bg-stone-800 rounded-2xl overflow-hidden shadow-sm">
            <Image src="/images/placeholders/careers.jpg" alt="Careers at Meridian Group" fill className="object-cover opacity-80" priority />
          </div>
        </Container>
      </Section>

      <Section className="py-24 border-b border-stone-200">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <Typography variant="h2" className="mb-6">How we work.</Typography>
              <Typography variant="body" className="mb-6">
                We work in small, focused teams. We prioritize deep work and uninterrupted time. We believe in clear communication over constant communication.
              </Typography>
              <Typography variant="body">
                Our culture is built around mutual respect, high standards, and a shared commitment to building software that lasts.
              </Typography>
            </div>
            
            <div className="bg-stone-50 p-8 border border-stone-200 flex flex-col gap-6">
              <Typography variant="h4">Benefits & Perks</Typography>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                  <Typography variant="body">Comprehensive healthcare coverage</Typography>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                  <Typography variant="body">Flexible remote work options</Typography>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                  <Typography variant="body">Generous continuous learning budget</Typography>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                  <Typography variant="body">Minimum 4 weeks paid time off</Typography>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24 bg-stone-50">
        <Container>
          <div className="flex flex-col gap-12">
            <div>
              <Typography variant="h2">Open Positions</Typography>
            </div>

            <div className="flex flex-col border-t border-stone-200">
              {positions.map((job) => (
                <div key={job.title} className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 border-b border-stone-200 group">
                  <div className="flex flex-col gap-2">
                    <Typography variant="h3" className="group-hover:text-stone-600 transition-colors">{job.title}</Typography>
                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-stone-500">
                      <span>{job.department}</span>
                      <span className="w-1 h-1 rounded-full bg-stone-300" />
                      <span>{job.location}</span>
                      <span className="w-1 h-1 rounded-full bg-stone-300" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="md:opacity-0 group-hover:opacity-100 transition-opacity self-start md:self-center">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="bg-stone-100 p-8 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div>
                <Typography variant="h4">Don&apos;t see a fit?</Typography>
                <Typography variant="body" className="mt-2 text-stone-600">We are always open to hearing from exceptional people.</Typography>
              </div>
              <Button href="mailto:careers@meridiangroup.test">Send your resume</Button>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
