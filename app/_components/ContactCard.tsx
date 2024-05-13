import {Card} from "@/components/ui/card";
import {ArrowUpRight} from "lucide-react";
import React from "react";
import Link from "next/link";

export const ContactCard = (props:{
    image: string;
    mediumImage: string;
    title: string;
    description: string;
    url: string;
}) => {
    return (
        <Link href={props.url}>
        <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
            <div className="relative">
                <img src={props.image} alt={props.title} className="w-10 h-10"/>
                <img src={props.mediumImage} alt={props.title} className="w-5 h-5 absolute -bottom-1 -right-1 rounded-full object-contain"/>
            </div>
            <div className="mr-auto flex-1">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                </div>

                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight className="group-hover:translate-x-1 mr-4 group-hover:-translate-y-1 transition-transform" size={16} />
        </Card>
        </Link>
    )
};