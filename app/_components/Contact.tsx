import {Section} from "@/app/_components/Section";
import {Badge} from "@/components/ui/badge";
import {ContactCard} from "@/app/_components/ContactCard";
import React from "react";
import profilePic from './images/profile-pic.png'

export const Contact = () => {
    return (
        <Section className="flex flex-col gap-4 items-start">
            <Badge variant={"outline"}>Contact me</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I will be happy to work with you.
            </h2>
            <div className="flex max-md:flex-col gap-4 w-full">
                <ContactCard
                    url="www.linkedin.com/in/mohamed-elhedi-kraiem-49677a178"
                    image={profilePic.src}
                    mediumImage="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
                    title="Mohamed-Elhedi Kraiem"
                    description="263 relations" />
                <ContactCard
                    url="mailto:mohamedelhedi.kr@gmail.com"
                    image={profilePic.src}
                    mediumImage="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI"
                    title="mohamedelhedi.kr@gmail.com"
                    description="Email me for any inquiries." />
            </div>
        </Section>
    )
}