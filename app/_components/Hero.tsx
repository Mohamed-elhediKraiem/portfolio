import { Section } from "@/app/_components/Section";
import { LinkedinIcon } from "@/app/_components/icons/LinkedinIcon";
import Link from "next/link";
import { Code } from "@/app/_components/Code";
import profilePic from "./images/profile-pic.png";
import schImage from "./images/sch.png";
import { Spacing } from "./Spacing";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center justify-center bg-black bg-gradient-to-b from-transparent to-background pointer-events-none h-screen">
      <div className="w-64 flex-none"></div>
      <div className="flex-[3]">
        <h2 className="font-caption font-bold text-6xl text-primary">
          Transforming data into insights
        </h2>
        <h3 className="text-5xl font-caption">Mohamed-Elhedi Kraïem</h3>
        <p className="text-xl leading-relaxed">
          Graduated from{" "}
          <Link href="https://www.epitech.eu/">
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://companieslogo.com/img/orig/epitech-eu-28fcad28.png?t=1701708648"
                alt="epitech logo"
                style={{ width: 16, height: "auto" }}
              />
              Epitech
            </Code>
          </Link>
          , I’m a <strong>Data Engineer & Software Engineer</strong> passionate
          about transforming data into impactful solutions. Open to new
          opportunities. Let’s connect on{" "}
          <Link href="https://www.linkedin.com/in/mohamed-elhedi-kraiem-49677a178/">
            <Code className="inline-flex items-center gap-1">
              <LinkedinIcon size={16} /> LinkedIn
            </Code>
          </Link>
          .
        </p>
      </div>
      <div className="flex flex-[2] justify-center items-center">
        <img
          src={profilePic.src}
          alt="mohamed's picture"
          className="w-auto h-auto object-contain"
        />
      </div>
      <div className="w-64 flex-none "></div>
    </Section>
  );
};
