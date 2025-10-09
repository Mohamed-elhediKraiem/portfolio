"use client";

import { Section } from "./Section";
import Link from "next/link";
import { LinkedinIcon } from "@/app/_components/icons/LinkedinIcon";
import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // ✅ Icônes gratuites de Font Awesome
import dynamic from "next/dynamic";
const ContactModelCanvas = dynamic(
  () => import("./ContactModel").then((mod) => mod.ContactModelCanvas),
  { ssr: false }
);

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <Section className="relative flex flex-col md:flex-row justify-center items-start gap-20 bg-black text-white py-32 px-8">
      {/* Dégradé haut */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-neutral-200 via-black/60 to-black pointer-events-none" />

      {/* 🏷️ Titre */}
      <h2 className="absolute top-12 w-full text-center font-caption text-6xl font-bold text-white mt-20">
        Let’s Get in Touch
      </h2>

      {/* 📨 Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-lg mt-40"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 transition resize-none"
        />

        <div className="flex items-center gap-4 mt-6">
          <button
            type="submit"
            disabled={status === "sending"}
            className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          <Link
            href="https://www.linkedin.com/in/mohamed-elhedi-kraiem-49677a178/"
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
          >
            <LinkedinIcon size={18} />
            Contact on LinkedIn
          </Link>
        </div>

        {/* Message de retour */}
        {status === "sent" && (
          <p className="text-green-400 mt-3">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-3">❌ Something went wrong.</p>
        )}
      </form>

      {/* 📍 Informations de contact */}
      <div className="flex flex-col gap-6 text-neutral-300 mt-40">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-white text-xl" />
          <span className="text-lg">Paris, France</span>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-white text-xl" />
          <a
            href="tel:+33651977246"
            className="text-lg hover:text-neutral-100 transition"
          >
            +33 6 51 97 72 46
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-white text-xl" />
          <a
            href="mailto:mohamedelhedi.kr@gmail.com"
            className="text-lg hover:text-neutral-100 transition"
          >
            mohamedelhedi.kr@gmail.com
          </a>
        </div>
      </div>

      {/* 🧍‍♂️ Future zone modèle 3D */}
      {/* <div className="md:block overflow-visible">
        <ContactModelCanvas />
      </div> */}
    </Section>
  );
};
