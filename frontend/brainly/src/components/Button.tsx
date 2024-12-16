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
        <button onClick={props.onClick} className={props.variant === "primary" ? defaultStyles + " flex bg-white text-black " : defaultStyles + " bg-white text-black "} >
            {props.startIcon && <div className=" pr-2">
                {props.startIcon}
            </div>}
            {props.text}
        </button>
    )
}

export default Button
