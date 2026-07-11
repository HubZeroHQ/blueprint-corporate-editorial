import Link from "next/link";
import { Container } from "./Container";
import { navigation } from "@/config/navigation";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center gap-2 z-50 relative">
            <Image src="/brand/logo.svg" alt="Meridian Group Logo" width={140} height={24} priority className="h-6 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex h-10 items-center justify-center bg-stone-900 px-6 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-800"
          >
            Get in touch
          </Link>
          <button className="md:hidden p-2 text-stone-900">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </Container>
    </header>
  );
}
