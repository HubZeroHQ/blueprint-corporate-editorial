"use client";

import { FormEvent } from "react";
import { Button } from "@/components/ui";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    window.location.href = `mailto:hello@meridiangroup.test?subject=${encodeURIComponent(
      `Website inquiry from ${name}`
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium px-1">Name</label>
        <input type="text" id="name" name="name" className="h-12 border border-stone-300 bg-white px-5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900" required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium px-1">Email</label>
        <input type="email" id="email" name="email" className="h-12 border border-stone-300 bg-white px-5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900" required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-sm font-medium px-1">Company</label>
        <input type="text" id="company" name="company" className="h-12 border border-stone-300 bg-white px-5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium px-1">Message</label>
        <textarea id="message" name="message" rows={5} className="border border-stone-300 bg-white p-5 rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900" required></textarea>
      </div>
      <Button type="submit" size="lg" className="mt-4 w-full sm:w-auto self-start">Send message</Button>
    </form>
  );
}
