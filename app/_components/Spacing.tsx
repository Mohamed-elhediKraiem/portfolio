import {cn} from "@/lib/utils";

export type SpacingProps = {
    size?: "sm" | "md" | "lg";
}
export const Spacing = ({size = "md"}: SpacingProps) => {
    return (
        <div
            className={cn({
                "h8 lg:h-16": size === "sm",
                "h16 lg:h-24": size === "md",
                "h-24 lg:h-32": size === "lg",
            })}
            style={{height: 60}}
        ></div>
    )
}