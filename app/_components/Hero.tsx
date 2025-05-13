import {Section} from "@/app/_components/Section";
import {LinkedinIcon} from "@/app/_components/icons/LinkedinIcon";
import Link from "next/link";
import {Code} from "@/app/_components/Code";
import profilePic from './images/profile-pic.png'
import schImage from './images/sch.png'
export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start">
            <div className="flex-[3]">
                <h2 className="font-caption font-bold text-4xl text-primary">Mohamed-Elhedi Kraïem</h2>
                <h3 className="text-3xl font-caption">Computer Science Student & Product Owner</h3>
                <p className="text-base">
                    Currently in my final year at{" "}
                    <Link href="https://www.epitech.eu/">
                    <Code className="inline-flex items-center gap-1">
                        <img src="https://companieslogo.com/img/orig/epitech-eu-28fcad28.png?t=1701708648"
                             alt="epitech logo"
                             style={{width: 16, height: "auto"}}
                        />Epitech
                    </Code>{" "}
                    </Link>
                    (graduating in July 2025) and working as a Product Owner at{" "}
                    <Link href="https://www.se.com/">
                    <Code className="inline-flex items-center gap-1">
                        <img src={schImage.src}
                             alt="schneider electric logo"
                             style={{width: 16, height: "auto"}}
                        />Schneider Electric
                    </Code>
                    </Link>.
                    <br/><br/>
                    Passionate about IT, from software development to project management, I thrive in technical and collaborative environments.
                    <br/><br/>
                    I will be available starting September 2025 for new professional opportunities.
                    <br/><br/>
                    Feel free to connect with me on{" "}
                    <Link href="https://www.linkedin.com/in/mohamed-elhedi-kraiem-49677a178/">
                        <Code className="inline-flex items-center gap-1">
                            <LinkedinIcon size={16}/> LinkedIn
                        </Code>
                    </Link>
                    {" "}to discuss!
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