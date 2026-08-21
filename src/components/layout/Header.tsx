"use client";

import Image from "next/image"; import Link from "next/link"; import { usePathname } from "next/navigation"; import { useEffect, useRef, useState } from "react"; import { navigation } from "@/config/navigation";

const darkHeroRoutes = new Set(["/about", "/industries", "/careers"]);

export function Header(){
  const pathname=usePathname(); const [scrolled,setScrolled]=useState(false); const [drawerRoute,setDrawerRoute]=useState<string|null>(null); const triggerRef=useRef<HTMLButtonElement>(null); const closeRef=useRef<HTMLButtonElement>(null); const drawerRef=useRef<HTMLDivElement>(null); const drawerOpen=drawerRoute===pathname;
  const heroAppearance=darkHeroRoutes.has(pathname)?"dark":"light"; const navAppearance=scrolled?"frosted":heroAppearance;
  useEffect(()=>{const update=()=>setScrolled(window.scrollY>40);update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update)},[]);
  useEffect(()=>{if(!drawerOpen)return;const previous=document.body.style.overflow;const trigger=triggerRef.current;document.body.style.overflow="hidden";closeRef.current?.focus();const key=(event:KeyboardEvent)=>{if(event.key==="Escape")setDrawerRoute(null);if(event.key==="Tab"){const items=drawerRef.current?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');if(!items?.length)return;const first=items[0],last=items[items.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}};document.addEventListener("keydown",key);return()=>{document.body.style.overflow=previous;document.removeEventListener("keydown",key);trigger?.focus()}},[drawerOpen]);
  useEffect(()=>{const resize=()=>{if(window.innerWidth>=768)setDrawerRoute(null)};window.addEventListener("resize",resize);return()=>window.removeEventListener("resize",resize)},[]);
  const dark=navAppearance==="dark";
  return <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
    <div aria-hidden={drawerOpen || undefined} data-appearance={navAppearance} className={`nav-shell pointer-events-auto mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-6 ${drawerOpen?"invisible":""} ${navAppearance==="frosted"?"nav-shell--frosted":""}`}>
      <Link href="/" className="inline-flex min-h-11 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4"><Image src={dark?"/brand/logo-light.svg":"/brand/logo-dark.svg"} alt="Meridian Group" width={140} height={24} priority className="h-6 w-auto"/></Link>
      <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">{navigation.map(item=>{const active=pathname===item.href||pathname.startsWith(`${item.href}/`);return <Link key={item.href} href={item.href} aria-current={active?"page":undefined} className={`nav-link ${dark?"text-stone-200":"text-stone-700"}`}>{item.label}</Link>})}</nav>
      <div className="flex items-center gap-3"><Link href="/contact" className={`hidden h-10 items-center px-5 text-sm font-medium md:inline-flex ${dark?"bg-stone-50 text-stone-950":"bg-stone-950 text-stone-50"}`}>Start a conversation</Link><button ref={triggerRef} type="button" className={`grid min-h-11 min-w-11 place-items-center md:hidden ${dark?"text-stone-50":"text-stone-950"}`} aria-label="Open navigation" aria-expanded={drawerOpen} aria-controls="mobile-navigation" onClick={()=>setDrawerRoute(pathname)}><span aria-hidden="true" className="text-2xl">≡</span></button></div>
    </div>
    {drawerOpen&&<div ref={drawerRef} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation" className="pointer-events-auto fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-stone-50 px-5 pb-8 pt-5 text-stone-950">
      <div className="flex h-14 items-center justify-between"><Image src="/brand/logo-dark.svg" alt="Meridian Group" width={140} height={24} className="h-6 w-auto"/><button ref={closeRef} type="button" onClick={()=>setDrawerRoute(null)} className="grid min-h-11 min-w-11 place-items-center text-3xl" aria-label="Close navigation">×</button></div>
      <nav aria-label="Mobile" className="mt-14 flex flex-col border-t border-stone-300">{navigation.map((item,index)=><Link key={item.href} href={item.href} className="grid grid-cols-[3rem_1fr] items-baseline border-b border-stone-300 py-5"><span className="text-xs text-stone-400">0{index+1}</span><span className="font-serif text-3xl">{item.label}</span></Link>)}</nav>
      <Link href="/contact" className="mt-auto flex min-h-14 items-center justify-center bg-stone-950 px-6 text-stone-50">Start a conversation</Link>
    </div>}
  </header>
}
