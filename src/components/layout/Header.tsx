"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/config/navigation";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDarkHero = ["/about", "/industries", "/careers"].includes(pathname);
  const isDarkTheme = isDarkHero && !scrolled && !mobileMenuOpen;
  const hasPillBackground = scrolled && !mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);



  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-6 pb-4 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-50 pointer-events-auto flex items-center justify-between w-full max-w-5xl px-6 h-16 rounded-full transition-all duration-500 ease-out ${
          hasPillBackground
            ? "bg-stone-50/90 backdrop-blur-xl border border-stone-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            : "bg-transparent border border-transparent shadow-none"
        }`}
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 z-50 relative group">
            <Image 
              src={isDarkTheme ? "/brand/logo-light.svg" : "/brand/logo.svg"} 
              alt="Meridian Group Logo" 
              width={140} 
              height={24} 
              priority 
              className="h-6 w-auto transition-all duration-300 group-hover:opacity-70" 
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-300 px-1 py-2 ${
                    isDarkTheme ? "text-stone-300 hover:text-stone-50" : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${isDarkTheme ? "bg-stone-50" : "bg-stone-900"}`}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={`hidden md:inline-flex h-10 items-center justify-center px-6 text-sm font-medium transition-colors rounded-full ${
              isDarkTheme 
                ? "bg-stone-50 text-stone-900 hover:bg-stone-200" 
                : "bg-stone-900 text-stone-50 hover:bg-stone-800"
            }`}
          >
            Get in touch
          </Link>
          <button 
            className={`md:hidden p-2 z-50 relative transition-colors ${isDarkTheme ? "text-stone-50" : "text-stone-900"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-stone-50/95 backdrop-blur-xl flex flex-col pt-32 px-6 pb-8 pointer-events-auto overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-3xl font-serif tracking-tight text-stone-900 py-2 border-b border-stone-200/50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-12 flex flex-col gap-4">
              <Link
                href="/contact"
                className="w-full h-14 flex items-center justify-center bg-stone-900 text-stone-50 rounded-full font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
