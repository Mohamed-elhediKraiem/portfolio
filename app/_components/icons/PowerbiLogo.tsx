import {ComponentPropsWithoutRef} from "react";

export const PowerbiLogo = (props: ComponentPropsWithoutRef<"svg"> & {size? : number}) => {
    return (
        <svg width={props.size}
             height={props.size} viewBox="0 0 256 342" version="1.1" preserveAspectRatio="xMidYMid" {...props}>
            <title>Power BI</title>
            <defs>
                <path d="M142.222222,14.2222222 C142.222222,6.36750222 148.589867,0 156.444444,0 L241.777778,0 C249.632356,0 256,6.36750222 256,14.2222222 L256,327.111111 C256,334.965689 249.632356,341.333333 241.777778,341.333333 L14.2222222,341.333333 C6.36764444,341.333333 0,334.965689 0,327.111111 L0,184.888889 C0,177.034311 6.36764444,170.666667 14.2222222,170.666667 L71.1114667,170.666667 L71.1114667,99.5555556 C71.1114667,91.7009778 77.4791111,85.3333333 85.3336889,85.3333333 L142.222222,85.3333333 L142.222222,14.2222222 Z" id="power-bi-path-1"></path>
                <linearGradient x1="42.5926042%" y1="-9.35203125e-07%" x2="57.2448958%" y2="93.1735417%" id="power-bi-linearGradient-1">
                    <stop stopColor="currentColor" offset="0%"></stop>
                    <stop stopColor="currentColor" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="40.1218519%" y1="0%" x2="62.0283333%" y2="95.5919444%" id="power-bi-linearGradient-2">
                    <stop stopColor="currentColor" offset="0%"></stop>
                    <stop stopColor="currentColor" offset="100%"></stop>
                </linearGradient>
                <linearGradient x1="27.7741667%" y1="0%" x2="55.0115278%" y2="96.828125%" id="power-bi-linearGradient-3">
                    <stop stopColor="currentColor" offset="0%"></stop>
                    <stop stopColor="currentColor" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g>
                <mask id="mask-2" fill="white">
                    <use href="#power-bi-path-1"></use>
                </mask>
                <polygon fill="url(#power-bi-linearGradient-1)" mask="url(#mask-2)" points="256 0 256 341.333333 142.222222 341.333333 142.222222 0"></polygon>
                <path d="M184.888889,100.977778 L184.888889,342.755556 L71.1111111,342.755556 L71.1111111,86.7555556 L170.666667,86.7555556 C178.521244,86.7555556 184.888889,93.1232 184.888889,100.977778 Z" fillOpacity="0.2" fill="currentColor" mask="url(#mask-2)"></path>
                <path d="M184.888889,106.666667 L184.888889,348.444444 L71.1111111,348.444444 L71.1111111,92.4444444 L170.666667,92.4444444 C178.521244,92.4444444 184.888889,98.8120889 184.888889,106.666667 Z" fillOpacity="0.18" fill="currentColor" mask="url(#mask-2)"></path>
                <path d="M184.888889,99.5555556 L184.888889,341.333333 L71.1111111,341.333333 L71.1111111,85.3333333 L170.666667,85.3333333 C178.521244,85.3333333 184.888889,91.7009778 184.888889,99.5555556 Z" fill="url(#power-bi-linearGradient-2)" mask="url(#mask-2)"></path>
                <path d="M0,170.666667 L0,341.333333 L113.777778,341.333333 L113.777778,184.888889 C113.777778,177.034311 107.410133,170.666667 99.5555556,170.666667 L0,170.666667 Z" fill="url(#power-bi-linearGradient-3)" mask="url(#mask-2)"></path>
            </g>
        </svg>
    )
}