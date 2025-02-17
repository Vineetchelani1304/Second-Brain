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
                "http://localhost:8000/content/share",
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
                                <p>http://localhost:5173{linkShare}</p>
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
