import { Page, Section, Container } from "@/components/layout";
import { Typography, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Page>
      <Section className="py-32 md:py-48 flex items-center justify-center min-h-[70vh]">
        <Container>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
            <Typography variant="caption" className="text-stone-400">Error 404</Typography>
            <Typography variant="h1">
              Page not found.
            </Typography>
            <Typography variant="body" className="text-xl max-w-md">
              The page you are looking for does not exist or has been moved.
            </Typography>
            <Button href="/" size="lg" className="mt-4">
              Return to Homepage
            </Button>
          </div>
        </Container>
      </Section>
    </Page>
  );
}