import { ReactElement } from "react"

interface buttonProps {
    variant: "primary" | "secondary",
    text: string,
    startIcon?: ReactElement,
    onClick?:()=>void,
}

const defaultStyles = "p-2 items-center rounded-md flex font-light"
const Button = (props: buttonProps) => {
    return (
        <button onClick={props.onClick} className={props.variant === "primary" ? defaultStyles + " flex bg-purple-500 text-white " : defaultStyles + " bg-purple-200 text-purple-600 "} >
            <div className=" pr-2">
                {props.startIcon}
            </div>
            {props.text}
        </button>
    )
}

export default Button
