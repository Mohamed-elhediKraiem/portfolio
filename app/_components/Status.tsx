import {Section} from "@/app/_components/Section";
import {Card} from "@/components/ui/card";
import {ArrowUpRight, Code, EyeOff, LucideActivity, LucideIcon, MessageCircle, Squirrel} from "lucide-react";
import Link from "next/link";
import React from "react";
import {Badge} from "@/components/ui/badge";
import {ContactCard} from "@/app/_components/ContactCard";
import profilePic from './images/profile-pic.png'

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">

            <div className="flex-[2]  h-full flex flex-col w-full gap-4">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">Work</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index)=> (
                            <Work
                                key={index}
                                {...work} />
                        ))
                        }
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">Contact</p>
                    <ContactCard
                        url="www.linkedin.com/in/mohamed-elhedi-kraiem-49677a178"
                        image={profilePic.src}
                        mediumImage="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
                        title="Mohamed-Elhedi Kraiem"
                        description="263 relations" />
                </Card>
            </div>
            <Card className="flex-[3] w-full flex flex-col gap-2 p-4">
                <p className="text-lg text-muted-foreground">Side, fun projects.</p>
                <div className="flex flex-col gap-4">
                    {SIDE_PROJECTS.map((project, index)=> (
                        <SideProject
                            key={index}
                            Logo={project.Logo}
                            title={project.title}
                            description={project.description}
                            url={project.url} />
                    ))
                    }
                </div>
            </Card>
        </Section>
    )
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo : Squirrel,
        title : "Pokedex",
        description : "A pokedex developped in Angular.",
        url : "https://ng-pokemon-app-12e74.web.app/login"
    },
    {
        Logo : EyeOff,
        title : "See with heart",
        description : "A website for an association of blind people.",
        url : "https://www.voiraveclecoeur.com/"
    }
]

type SideProjectProps  = {
    Logo : LucideIcon,
    title : string,
    description : string,
    url : string
}
const SideProject = (props:SideProjectProps) => {
    return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        <span className="bg-accent text-accent-foreground p-3 rounded-sm">
            <props.Logo size={16}/>
        </span>
        <div>
            <div className="text-lg font-semibold">{props.title}</div>
            <p className="text-sm text-muted-foreground">{props.description}</p>
        </div>
    </Link>);
}

const WORKS: WorkProps[] = [
    {
        image : "https://media.glassdoor.com/sql/2961003/ouidou-squareLogo-1657703573608.png",
        title : "Ouidou",
        role : "Web Developper",
        url : "https://www.linkedin.com/company/ouidou-consulting/",
        date : "2022 - present"
    },
    {
        image : "https://media.licdn.com/dms/image/D4E0BAQE95fQQZlgM5Q/company-logo_100_100/0/1688130044911/entoriaofficiel_logo?e=1723680000&v=beta&t=PKLI9lo08ONKQzy9nnPikxCsoY7H9MshyvUV69nWb6A",
        title : "Entoria",
        role : "Business Intelligence Developper",
        url : "https://www.linkedin.com/company/entoriaofficiel/",
        date : "2019-2022",
        freelance : true
    },
    {
        image : "https://media.licdn.com/dms/image/C4E0BAQHySUgSow6jag/company-logo_200_200/0/1630590029063/armel_baena_conseil_logo?e=1723680000&v=beta&t=668EhrTwfoHWqW4n5Bv4p2NwznTXIQOwCESKyPFRwMY",
        title : "ABC Conseil",
        role : "Developper",
        url : "https://www.linkedin.com/company/armel-baena-conseil/",
        date : "2019",
    },
    {
        image : "https://media.licdn.com/dms/image/D4D0BAQEVKSA5-tbKwQ/company-logo_200_200/0/1713518738324/bureau_veritas_group_logo?e=1723680000&v=beta&t=_lphTpVvMNf4SvLcqaleDB8nm1Mhi4fdgye1bIGmDPY",
        title : "Bureau Veritas",
        role : "Business Intelligence Developper",
        url : "https://www.linkedin.com/company/bureau-veritas-group/",
        date : "2017-2018",
    }
]

type WorkProps  = {
    image : string,
    title : string,
    role : string,
    url : string,
    date: string,
    freelance? : boolean
}
const Work = (props:WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" />
            <div className="">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.freelance && <Badge variant="outline">Mission</Badge>}
                </div>

                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <div className="ml-auto">
                <p className="text-xs text-muted-foreground">{props.date}</p>
            </div>
        </Link>);
}
