// import { useState } from "react"
// import Button from "./Button"
// import { Cross } from "../icons/Cross"
// import axios from "axios"
// import { Link } from "react-router-dom"



// interface shareLink {
//     isOpen: boolean,
//     setIsOpen: () => void
// }

// const ShareContent = ({ isOpen, setIsOpen }: shareLink) => {
//     // const [share, setShare] = useState(false)
//     const [Load, setLoad] = useState(false)
//     const [linkShare, setLink] = useState(null)
//     async function Share() {
//         setLoad(true)
//         // setShare(true)
//         const res = await axios.post("http://localhost:8888/content/share", {
//             share:true
//         }, {
//             headers: {
//                 "Authorization": localStorage.getItem("token")
//             }
//         })
//         console.log(res.data.link)
//         setLink(res.data.link)
//         localStorage.setItem("link", res.data.link)
//         setLoad(false)
//         setIsOpen()
//     }


//     return (<div>
//         {isOpen && <div className=" text-white top-0 left-0 flex justify-center opacity-100 backdrop-blur-sm h-screen w-screen absolute">
//             <div className=" flex flex-col justify-center  ">
//                 <span className="bg-black border rounded-2xl p-4 px-6">
//                     <div className=" flex justify-end cursor-pointer" onClick={() => {
//                         setIsOpen();
//                     }}>
//                         <Cross />
//                     </div>
//                     {Load ? "Loading..." : <div className=" bg-gray-600 flex flex-col gap-4 p-3 rounded-lg ">
//                         http://localhost:8888/content{localStorage.getItem("link")}
//                     </div>}
//                     <div className=" flex justify-center items-center">
//                     {localStorage.getItem("link") ?
//                         <button className=" bg-gradient-to-b from-blue-500 to-blue-900 p-2 rounded-lg font-semibold text-white" onClick={() => { 
//                             localStorage.removeItem("link")
//                             setIsOpen()
//                             }}>Stop Share</button> : <div className=" flex justify-center mt-4">
//                             <Button variant="primary" onClick={Share} text="Share Content" />
//                         </div>
//                     }
//                     </div>
//                 </span>
//             </div>
//         </div>}
//     </div>
//     )
// }

// export default ShareContent


import { useState } from "react";
import Button from "./Button";
import { Cross } from "../icons/Cross";
import axios from "axios";

interface ShareLinkProps {
    isOpen: boolean;
    setIsOpen: () => void;
}

const ShareContent = ({ isOpen, setIsOpen }: ShareLinkProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [linkShare, setLinkShare] = useState<string | null>(localStorage.getItem("link"));

    // Function to share the content
    async function Share() {
        setIsLoading(true);
        try {
            const res = await axios.post(
                "http://localhost:8888/content/share",
                { share: true },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            );

            // Update state and localStorage with the new link
            console.log(res.data.link);
            setLinkShare(res.data.link);
            localStorage.setItem("link", res.data.link);
        } catch (error) {
            console.error("Error sharing content:", error);
            alert("Failed to share content. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    // Function to stop sharing the content
    function stopShare() {
        setLinkShare(null);
        localStorage.removeItem("link");
        setIsOpen();
    }

    return (
        <div>
            {isOpen && (
                <div className="text-white fixed top-0 left-0 flex justify-center items-center h-screen w-screen backdrop-blur-sm">
                    <div className="bg-black border rounded-2xl p-6 px-8 shadow-lg">
                        {/* Close Button */}
                        
                        <div className=" flex  items-center justify-between mb-4">
                        <h1 className=" font-semibold text-xl">
                            Share Link
                        </h1>
                        <div className="flex justify-end cursor-pointer" onClick={setIsOpen}>
                            <Cross />
                        </div>
                    </div>

                        {/* Link Display */}
                        <div className="bg-gray-700 text-center text-white p-4 rounded-lg mt-4">
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : linkShare ? (
                                <p>http://localhost:8888/content{linkShare}</p>
                            ) : (
                                <p>No link shared yet.</p>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center items-center mt-4">
                            {linkShare ? (
                                <button
                                    className="bg-gradient-to-b from-blue-500 to-blue-900 p-2 rounded-lg font-semibold text-white"
                                    onClick={stopShare}
                                >
                                    Stop Share
                                </button>
                            ) : (
                                <Button
                                    variant="primary"
                                    onClick={Share}
                                    text="Share Content"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShareContent;
