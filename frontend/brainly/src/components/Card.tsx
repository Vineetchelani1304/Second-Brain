import { ReactElement, useEffect } from 'react';
import { Share } from '../icons/share';
import { Delete } from '../icons/Delete';
import axios from 'axios';

interface CardProps {
    title: string;
    type: "Youtube" | "Twitter" | "Doc";
    link: string;
    icon?: ReactElement;
    cardId: string
}

const Card = (props: CardProps) => {
//     function deleteContent()=> {
//         const cardId = props.cardId;
//     axios.delete("http://localhost:8888/content/deleteContent",{
//         props.cardId
//     },{
//         headers: {
//             "Authorization" : localStorage.getItem("token")
//         }
//     })
// }
console.log("cardId",props.cardId)
const deleteContent = async () => {
    try {
        console.log("Deleting content with ID:", props.cardId);
        const response = await axios.delete("http://localhost:8888/content/deleteContent", {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
            data: { contentId: props.cardId }, // Send cardId in the body
        });
        console.log("Content deleted successfully:", response.data);
    } catch (error) {
        console.error("Error deleting content:", error);
    }
};


useEffect(() => {
    // Load Twitter widgets.js script dynamically
    if (props.type === "Twitter") {
        const script = document.createElement('script');
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Clean up the script when component unmounts
        };
    }
}, [props.type]); // Re-run the effect if the `type` changes

return (
    <div className="max-w-[300px] hover:scale-105 transition-all duration-500  w-full p-4 text-slate-200 bg-black rounded-2xl shadow-md border border-gray-700">
        <div className="flex justify-between items-center mb-4">
            <div className="flex justify-start items-center gap-2">
                <span className="font-semibold text-xl">{props.title}</span>
            </div>
            <div className="flex gap-3   items-center">
                <div className=" hover:cursor-pointer">
                    <Share />
                </div>
                <div className='hover:cursor-pointer' onClick={deleteContent}>
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
