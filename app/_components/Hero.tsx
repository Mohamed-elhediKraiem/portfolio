import {Section} from "@/app/_components/Section";
import {LinkedinIcon} from "@/app/_components/icons/LinkedinIcon";
import Link from "next/link";
import {Code} from "@/app/_components/Code";
import profilePic from './images/profile-pic.png'
export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-[3]">
                <h2 className="font-caption font-bold text-4xl text-primary">Mohamed-Elhedi Kraïem</h2>
                <h3 className="text-3xl font-caption">Software developer and creator</h3>
                <p className="text-base">
                    I love creating content on{" "}
                    <Link href="https://www.linkedin.com/in/mohamed-elhedi-kraiem-49677a178/">
                        <Code className="inline-flex items-center gap-1">
                            <LinkedinIcon size={16}/> Linkedin
                        </Code>
                    </Link>,
                    currently student of{" "}
                    <Link href="https://www.epitech.eu/">
                    <Code className="inline-flex items-center gap-1">
                        <img src="https://companieslogo.com/img/orig/epitech-eu-28fcad28.png?t=1701708648"
                             alt="epitech logo"
                             style={{width: 16, height: "auto"}}
                        />Epitech
                    </Code>{" "}
                    </Link>
                    & working for{" "}
                    <Link href="https://ouidou.fr/">
                    <Code className="inline-flex items-center gap-1">
                        <img src="https://avatars.githubusercontent.com/u/48279949?s=200&v=4"
                             alt="ouidou logo"
                             style={{width: 16, height: "auto"}}
                        />Ouidou
                    </Code>
                    </Link>,
                    I{"'"}m living in{" "}
                    <Link href="https://fr.wikipedia.org/wiki/France">
                    <Code className="inline-flex items-center gap-1">
                        <img
                            src="https://flagcdn.com/w40/fr.png"
                            srcSet="https://flagcdn.com/w80/fr.png 2x"
                            alt="Drapeau de la France" 
                            style={{width: 16, height: "auto"}}
                        /> France
                    </Code>
                    </Link>
                </p>
            </div>
            <div className="flex-[2] flex justify-center">
                <img
                    src={profilePic.src}
                    className="w-full h-auto max-w-sm"
                    alt="mohamed's picture"
                />
            </div>
        </Section>
    )
}