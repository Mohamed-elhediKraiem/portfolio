"use client";

import Image from "next/image";
import { Section } from "./Section";

const projects = [
  {
    title: "Mole Code ATS",
    description:
      "An Applicant Tracking System (ATS) built with Next.js, Prisma, SQLite, and Tailwind CSS — enhanced with Python-based web scraping for candidate sourcing. Designed to simplify recruitment pipelines and improve data-driven hiring.",
    image: "/images/mole-code-ats.jpg",
    link: "https://github.com/Mohamed-elhediKraiem/mole-code-ats",
  },
  {
    title: "Safe Town Insights",
    description:
      "A data analysis platform exploring crime patterns across French cities. Developed with Python, Pandas, NumPy, and Streamlit to visualize and interact with safety insights through dynamic dashboards.",
    image: "/images/safe-town-insights.jpg",
    link: "https://github.com/Mohamed-elhediKraiem/safe-town-insights",
  },
  {
    title: "Mole Code Social Network Bot",
    description:
      "A Python automation bot for Instagram content creation — combining text generation, image processing, and scheduling features to streamline social media publishing workflows.",
    image: "/images/mole-code-bot.jpg",
    link: "https://github.com/Mohamed-elhediKraiem/",
  },
  {
    title: "Voir Avec le Cœur – Association Website",
    description:
      "A WooCommerce-based eCommerce website created for a non-profit organization, providing a platform for donations and product sales. Focused on accessibility, empathy, and clean user experience.",
    image: "/images/voir-avec-le-coeur.jpg",
    link: "https://voiraveclecoeur.fr",
  },
];

export const Projects = () => {
  return (
    <Section className="relative flex flex-col items-center justify-center py-32 bg-neutral-200 text-black">
      {/* 🔹 Dégradé fondu depuis le Hero (haut) */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-neutral-200/60 to-neutral-200 pointer-events-none" />

      {/* 🔹 Titre */}
      <h2 className="font-caption text-6xl font-bold mb-20 text-center mt-40">
        Crafting Data & Software Solutions That Matter
      </h2>

      {/* 🔹 Liste des projets */}
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 px-8 max-w-8xl w-full">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative w-full h-56">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-caption text-2xl font-semibold mb-3">
                {proj.title}
              </h3>
              <p className="text-neutral-700 text-base leading-relaxed flex-1">
                {proj.description}
              </p>

              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 self-start inline-block px-5 py-2 rounded-lg bg-black text-white text-lg font-medium hover:bg-neutral-800 transition"
                >
                  See more
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
