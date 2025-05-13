import {Section} from "@/app/_components/Section";
import {buttonVariants} from "@/components/ui/button";
import {GithubIcon} from "@/app/_components/icons/GithubIcon";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {LinkedinIcon} from "@/app/_components/icons/LinkedinIcon";
import Image from "next/image";
import lettreM from "./images/lettre-m.png";

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
               <div className="relative h-8 w-8">
                   <Image 
                       src={lettreM.src} 
                       alt="Logo M"
                       fill
                       className="object-contain"
                   />
               </div>
                <div className="flex-1" />
                <ul className="flex items-center gap-2">
                    <Link className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
                          href="https://github.com/Mohamed-elhediKraiem/"
                    >
                        <GithubIcon size={12} className="text-foreground" />
                    </Link>
                    <Link className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}
                          href="https://www.linkedin.com/in/mohamed-elhedi-kraiem-49677a178/"
                    >
                        <LinkedinIcon size={12} className="text-foreground" />
                    </Link>
                </ul>
            </Section>
        </header>
    );
};