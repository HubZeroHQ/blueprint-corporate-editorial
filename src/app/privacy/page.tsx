import { Page, Section, Container } from "@/components/layout";
import { Typography } from "@/components/ui";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <Page>
      <Section className="py-24 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-6 border-b border-stone-200 pb-12">
              <Typography variant="caption">Legal</Typography>
              <Typography variant="h1">Privacy Policy</Typography>
              <Typography variant="body" className="text-stone-500">Last updated: January 1, 2026</Typography>
            </div>

            <div className="prose prose-stone prose-lg">
              <Typography variant="body">
                We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </Typography>

              <Typography variant="h3" className="mt-12 mb-6">1. Information we collect</Typography>
              <Typography variant="body">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </Typography>
              <ul className="list-disc pl-6 my-6 flex flex-col gap-2">
                <li><Typography variant="body"><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</Typography></li>
                <li><Typography variant="body"><strong>Contact Data</strong> includes email address and telephone numbers.</Typography></li>
                <li><Typography variant="body"><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</Typography></li>
              </ul>

              <Typography variant="h3" className="mt-12 mb-6">2. How we use your data</Typography>
              <Typography variant="body">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </Typography>
              <ul className="list-disc pl-6 my-6 flex flex-col gap-2">
                <li><Typography variant="body">Where we need to perform the contract we are about to enter into or have entered into with you.</Typography></li>
                <li><Typography variant="body">Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</Typography></li>
                <li><Typography variant="body">Where we need to comply with a legal obligation.</Typography></li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
