import { Page, Section, Container } from "@/components/layout";
import { Typography } from "@/components/ui";
import Image from "next/image";
import { ContactForm } from "./ContactForm";

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
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
