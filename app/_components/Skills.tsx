import {Section} from "@/app/_components/Section";
import {Badge} from "@/components/ui/badge";
import {AngularLogo} from "@/app/_components/icons/AngularLogo";
import {Code} from "@/app/_components/Code";
import {SpringLogo} from "@/app/_components/icons/SpringLogo";
import {PowerbiLogo} from "@/app/_components/icons/PowerbiLogo";

export const Skills = () => {
    return (
        <Section className="flex flex-col gap-4 items-start">
            <Badge variant={"outline"}>Skills</Badge>
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                I love working on...
            </h2>
            <div className="flex max-md:flex-col gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <AngularLogo size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Angular</h3>
                    <p className="text-sm text-muted-foreground">
                        I{"'"}m all about building <strong>sleek</strong>, <strong>scalable</strong> web apps with <Code>Angular</Code> and making sure everything runs smoothly with <Code>TypeScript</Code>. Let{"'"}s create something <strong>amazing</strong> together !
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <SpringLogo size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Springboot</h3>
                    <p className="text-sm text-muted-foreground">
                        I craft tailor-made <strong>back-ends</strong> from scratch using <Code>Spring Boot</Code>, ensuring they{"'"}re perfectly suited to your <strong>needs</strong>. Let{"'"}s bring your ideas to life !
                    </p>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <PowerbiLogo size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">PowerBi</h3>
                    <p className="text-sm text-muted-foreground">
                        Need insights for your <strong>business plan</strong>? I{"'"}m your go-to expert in <Code>Power BI</Code>, ready to <strong>clean</strong> and <strong>merge</strong> data from <strong>multiple sources</strong> using the <Code>Microsoft BI</Code> suite. Let{"'"}s make your <strong>data</strong> work for you !
                    </p>
                </div>
            </div>
        </Section>
    )
}