import { Page, Section, Container } from "@/components/layout";
import { Typography } from "@/components/ui";
import { site } from "@/config/site";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <Page>
      <Section className="py-24 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col gap-6 border-b border-stone-200 pb-12">
              <Typography variant="caption">Legal</Typography>
              <Typography variant="h1">Terms of Service</Typography>
              <Typography variant="body" className="text-stone-500">Last updated: January 1, 2026</Typography>
            </div>

            <div className="prose prose-stone prose-lg">
              <Typography variant="body">
                Please read these terms of service carefully before using the {site.name} website.
              </Typography>

              <Typography variant="h3" className="mt-12 mb-6">1. Acceptance of Terms</Typography>
              <Typography variant="body">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement with {site.name}.
              </Typography>

              <Typography variant="h3" className="mt-12 mb-6">2. Use License</Typography>
              <Typography variant="body">
                Permission is granted to temporarily download one copy of the materials on the {site.name} website for personal, non-commercial transitory viewing only.
              </Typography>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}
