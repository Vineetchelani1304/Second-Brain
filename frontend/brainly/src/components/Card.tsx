import { ReactElement } from 'react'
import { Share } from '../icons/share'
interface CardProps {
    title: string,
    type: "youtube" | "twitter" | "Doc",
    link: string,
    icon?: ReactElement
}
const Card = (props: CardProps) => {
    return (
        <div className=" min-h-[270px] max-h-max p-4  min-w-[220px] max-w-[220px] rounded-md shadow-md border">
            <div className='flex justify-between'>
                <div className=" flex justify-evenly gap-1 items-center">
                    {props.icon}
                    {props.title}
                </div>
                <div className=" flex gap-1 items-center">

                    <Share />
                </div>
            </div>

            {props.type === "youtube" && <iframe className=' mt-2 rounded-md w-full h-full'  src={props.link.replace("watch", "embed")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}

            {props.type === "twitter" && <blockquote className="twitter-tweet mt-2 rounded-md w-full h-full">
                <a href={props.link.replace("x.com","twitter.com")}></a>
            </blockquote>}
        </div>
    )
}

export default Card
