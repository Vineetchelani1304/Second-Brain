import { ReactElement } from "react"

interface buttonProps {
    variant: "primary" | "secondary",
    text: string,
    startIcon?: ReactElement,
    onClick?:()=>void,
}

const defaultStyles = "p-2 items-center rounded-md flex justify-center items-center"
const Button = (props: buttonProps) => {
    return (
        <button onClick={props.onClick} className={props.variant === "primary" ? defaultStyles + " flex bg-gradient-to-b from-blue-500 to-blue-900 text-white " : defaultStyles + " bg-gradient-to-b from-slate-100 to-zinc-200 text-black "} >
            {props.startIcon && <div className=" pr-2">
                {props.startIcon}
            </div>}
            {props.text}
        </button>
    )
}

export default Button
