import { Page, Section, Container } from "@/components/layout";
import { Typography } from "@/components/ui";

export const metadata = {
  title: "Team",
  description: "The people behind the engineering and design.",
};

const team = [
  { name: "Arthur Pendelton", role: "Managing Partner", bio: "Former VP of Engineering at ScaleTech. 20 years guiding digital strategy." },
  { name: "Marcus Chen", role: "Head of Design", bio: "Pioneered editorial design systems for enterprise applications." },
  { name: "Elena Rostova", role: "Chief Architect", bio: "Specializes in zero-downtime migrations and legacy system modernization." },
  { name: "David Alim", role: "Director of Strategy", bio: "Translates complex business objectives into clear technical roadmaps." },
  { name: "Jessica Park", role: "Lead Engineer", bio: "Focuses on performance optimization and scalable infrastructure." },
  { name: "Thomas Wright", role: "Senior Designer", bio: "Crafts accessible, readable interfaces for dense data environments." }
];

export default function TeamPage() {
  return (
    <Page>
      <Section className="py-24 md:py-32">
        <Container>
          <div className="max-w-4xl flex flex-col gap-8 mb-24">
            <Typography variant="caption">Our Team</Typography>
            <Typography variant="h1">
              Engineering requires discipline. So does our hiring.
            </Typography>
            <Typography variant="lead" className="max-w-2xl">
              We are a team of senior practitioners who believe in doing the work, not just managing it.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {team.map((person) => (
              <div key={person.name} className="flex flex-col gap-6">
                <div className="aspect-square bg-stone-200" />
                <div className="flex flex-col gap-2">
                  <Typography variant="h4">{person.name}</Typography>
                  <Typography variant="small" className="text-stone-500 uppercase tracking-widest">{person.role}</Typography>
                  <Typography variant="body" className="mt-2 text-stone-600">{person.bio}</Typography>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
