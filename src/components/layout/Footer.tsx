import Link from "next/link";
import { Container } from "./Container";
import { site } from "@/config/site";
import { navigation } from "@/config/navigation";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-400 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image src="/brand/logo-light.svg" alt="Meridian Group Logo" width={140} height={24} className="h-6 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-stone-400 max-w-sm leading-relaxed">
              {site.description}
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <h4 className="font-medium text-stone-50 uppercase tracking-wider text-sm">Navigation</h4>
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-stone-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-medium text-stone-50 uppercase tracking-wider text-sm">Legal</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/privacy" className="transition-colors hover:text-stone-50">Privacy Policy</Link>
              <Link href="/terms" className="transition-colors hover:text-stone-50">Terms of Service</Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Engineered by <a href={site.author.url} className="text-stone-50 hover:underline">{site.author.name}</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
