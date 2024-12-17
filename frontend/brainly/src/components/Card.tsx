import { ReactElement, useEffect } from 'react';
// import { Share } from '../icons/share';
import { Delete } from '../icons/Delete';
// import axios from 'axios';
// import ShareContent from './ShareContent';

interface CardProps {
    title: string;
    type: "Youtube" | "Twitter" | "Doc";
    link: string;
    icon?: ReactElement;
    cardId?: string;
    onDelete?: (contentId: string) => void; 
}


const Card = (props: CardProps) => {
    useEffect(() => {
        if (props.type === "Twitter") {
            const script = document.createElement('script');
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script); 
            };
        }
    }, [props.type]);

    
    const deleteContent = () => {
        props.onDelete(props.cardId); 
    };

    // const [cardShare,setCardShare] = useState(false)

    return (
        <div className="max-w-[300px] hover:scale-105 transition-all duration-300 w-full p-4 text-slate-200 bg-black rounded-2xl shadow-md border border-gray-700">
            <div className="flex justify-between items-center mb-4">
                <div className="flex justify-start items-center gap-2">
                    <span className="font-semibold text-xl">{props.title}</span>
                </div>
                <div className="flex gap-3 items-center">
                    {/* <div className="hover:cursor-pointer" onClick={<ShareContent/>}>
                        <Share />
                    </div> */}
                    <div className="hover:cursor-pointer" onClick={deleteContent}>
                        <Delete />
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                {props.type === "Youtube" && (
                    <iframe
                        className="w-full h-full rounded-md"
                        src={props.link.replace("watch", "embed")}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                )}

                {props.type === "Twitter" && (
                    <blockquote className="twitter-tweet w-full ">
                        <a href={props.link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                )}
            </div>
        </div>
    );
};

export default Card;
