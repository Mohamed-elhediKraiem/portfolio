import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";

export const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
    return (
        <span
            className={cn("bg-accent/30 hover:bg-accent/50 transition-colors border border-accent my-0.5 px-1 text-primary rounded-sm", className)} {...props} />
    )
}