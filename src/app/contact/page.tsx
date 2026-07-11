import { Page, Section, Container } from "@/components/layout";
import { Typography, Button } from "@/components/ui";
import Image from "next/image";

export const metadata = {
  title: "Contact",
  description: "Get in touch with our team.",
};

export default function ContactPage() {
  return (
    <Page>
      <Section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="flex flex-col gap-8">
              <Typography variant="caption">Contact</Typography>
              <Typography variant="h1">
                Let&apos;s discuss your next initiative.
              </Typography>
              <Typography variant="body" className="text-xl max-w-md text-stone-600">
                Whether you&apos;re facing a complex engineering challenge or looking to clarify your digital strategy, we&apos;re ready to help.
              </Typography>
              
              <div className="mt-8 flex flex-col gap-8">
                <div className="relative w-full aspect-[16/9] bg-stone-200 mb-8 rounded-2xl overflow-hidden shadow-sm">
                  <Image src="/images/placeholders/contact.jpg" alt="Meridian Group Headquarters" fill className="object-cover" />
                </div>
                <div>
                  <Typography variant="caption" className="block mb-2">General Inquiries</Typography>
                  <a href="mailto:hello@meridiangroup.test" className="text-xl font-medium hover:underline">hello@meridiangroup.test</a>
                </div>
                <div>
                  <Typography variant="caption" className="block mb-2">New Business</Typography>
                  <a href="mailto:partnerships@meridiangroup.test" className="text-xl font-medium hover:underline">partnerships@meridiangroup.test</a>
                </div>
                <div>
                  <Typography variant="caption" className="block mb-2">Headquarters</Typography>
                  <address className="not-italic text-lg text-stone-600">
                    100 Innovation Drive<br />
                    Suite 400<br />
                    San Francisco, CA 94105
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 p-8 md:p-12 border border-stone-200 rounded-3xl shadow-sm">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium px-1">Name</label>
                  <input type="text" id="name" className="h-12 border border-stone-300 bg-white px-5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium px-1">Email</label>
                  <input type="email" id="email" className="h-12 border border-stone-300 bg-white px-5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium px-1">Company</label>
                  <input type="text" id="company" className="h-12 border border-stone-300 bg-white px-5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium px-1">Message</label>
                  <textarea id="message" rows={5} className="border border-stone-300 bg-white p-5 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900" required></textarea>
                </div>
                <Button type="submit" size="lg" className="mt-4 w-full sm:w-auto self-start">Send Message</Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
