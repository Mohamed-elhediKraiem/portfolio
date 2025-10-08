import { Space } from "lucide-react";
import { Section } from "./Section";
import { TimelineItem } from "./TimelineItem";

export const Timeline = () => {
  const timelineData = [
    {
      side: "right",
      type: "education",
      title: "Master of Science – EPITECH",
      date: "2022 – 2025",
      description:
        "Formation axée sur l’ingénierie logicielle, la data et les architectures distribuées. Projet de fin d’études en data engineering et IA appliquée.",
    },
    {
      side: "left",
      type: "experience",
      title: "Proxy Product Owner – Schneider Electric",
      date: "Septembre 2024 – Août 2025",
      description:
        "Pilotage du pôle Pricing (Oracle CPQ) : gestion des releases, rédaction de User Stories, coordination des équipes globales, suivi des incidents et amélioration continue des processus commerciaux.",
    },
    {
      side: "left",
      type: "experience",
      title:
        "Ingénieur IT Polyvalent – Data Engineer & Fullstack Developer (Ouidou)",
      date: "Décembre 2022 – Août 2024",
      description:
        "Participation à plusieurs projets data et fullstack : flux SSIS, dashboards Power BI, APIs Python, CI/CD GitLab et Docker. Développement Angular / .NET / SpringBoot pour le secteur public.",
    },
    {
      side: "left",
      type: "experience",
      title: "Consultant Data Analyst – ENTORIA",
      date: "Avril 2019 – Septembre 2022",
      description:
        "Conception d’un infocentre BI : développement de flux SSIS, modélisation du DWH, automatisation des traitements et création de rapports SAP BO et Power BI destinés aux métiers.",
    },
    {
      side: "left",
      type: "experience",
      title: "Ingénieur d’Études – ARMEL BAENA CONSEIL (AREVA & GRDF)",
      date: "Novembre 2018 – Février 2019",
      description:
        "Développement et intégration de flux SSIS, support technique et documentation. Déploiement et maintenance d’Elasticsearch et Kibana pour GRDF.",
    },
    {
      side: "left",
      type: "experience",
      title: "Consultant Data Analyst – Bureau Veritas",
      date: "Janvier 2017 – Novembre 2018",
      description:
        "Migration de rapports financiers SAS vers Tableau, conception de cubes SSAS et de flux ETL SSIS. Participation à des projets internationaux Finance et BadDebt.",
    },
    {
      side: "right",
      type: "education",
      title: "Licence Professionnelle – Université Paris 13",
      date: "2015",
      description:
        "Spécialisation en Génie Électrique et Informatique Industrielle, avec orientation data et automatisation.",
    },
  ];

  return (
    <Section className="relative flex flex-col items-center justify-center px-4 py-24 overflow-hidden bg-neutral-200">
      {/* 🔹 Titre */}
      <h2 className="text-6xl font-bold mb-16 text-center font-caption text-gray-900 z-10 ">
        My Journey as a Data & Software Engineer
      </h2>

      <div className="relative w-full max-w-7xl z-10">
        {/* 🔹 Ligne centrale */}
        <div
          className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2
  bg-gradient-to-b from-transparent via-neutral-800 to-transparent"
        ></div>

        {/* 🔹 Timeline Items */}
        <div className="space-y-20">
          {timelineData.map((item, i) => (
            <TimelineItem
              key={i}
              side={item.side}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
