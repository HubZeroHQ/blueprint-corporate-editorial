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

          <div className="border-t border-stone-300">
            {team.map((person, index) => (
              <article key={person.name} className="grid grid-cols-[3rem_1fr] gap-y-4 border-b border-stone-300 py-8 md:grid-cols-12 md:items-start md:gap-8 md:py-10">
                <span className="text-xs text-stone-400 md:col-span-1">0{index + 1}</span>
                <div className="flex flex-col gap-2 md:col-span-4">
                  <Typography variant="h4">{person.name}</Typography>
                  <Typography variant="small" className="text-stone-500 uppercase tracking-widest">{person.role}</Typography>
                </div>
                <Typography variant="body" className="col-start-2 text-stone-600 md:col-span-6 md:col-start-7">{person.bio}</Typography>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
