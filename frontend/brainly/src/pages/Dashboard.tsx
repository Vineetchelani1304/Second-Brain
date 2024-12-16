import { useState, useEffect } from "react";
import CreateContent from "../components/CreateContent";
import axios from "axios";
import Card from "../components/Card";
import Button from "../components/Button";
import { Plusicon } from "../icons/Plusicon";
import Sidebar from "../components/Sidebar";
import { Share } from "../icons/share";

const Dashboard: React.FC = () => {
    const [modalOpen, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState([]);

    // Fetch the content initially
    const fetchContent = async () => {
        try {
            const response = await axios.get("http://localhost:8888/content/getContent", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            setContent(response.data.data); // Set the fetched content
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    };

    // **Delete content and update state without refresh**
    const deleteContent = async (contentId: string) => {
        try {
            const response = await axios.delete("http://localhost:8888/content/deleteContent", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
                data: { contentId },
            });
            console.log("Content deleted successfully:", response.data);
            // Remove the deleted content from the state
            setContent(content.filter((item) => item._id !== contentId));
        } catch (error) {
            console.error("Error deleting content:", error);
            alert("Failed to delete content. Please try again.");
        }
    };

    // **Add new content and update state without refresh**
    const addContent = (newContent: any) => {
        setContent([...content, newContent]); // Update state with the new content
    };

    useEffect(() => {
        fetchContent(); // Load content initially
    }, []);

    return (
        <div className="bg-black h-screen flex">
            <Sidebar />
            <div className="flex-1 h-screen pt-2 px-3 ml-[15%] overflow-auto">
                <CreateContent open={modalOpen} onClose={() => setModal(false)} onContentAdded={addContent} />
                <div className="flex justify-between">
                    <h2 className="font-semibold text-3xl ml-1 text-slate-200">All Content</h2>
                    <div className="flex justify-end gap-3">
                        <Button
                            variant="primary"
                            text="Add Content"
                            startIcon={<Plusicon />}
                            onClick={() => setModal(true)}
                        />
                        <Button
                            variant="secondry"
                            text="Share Brain"
                            startIcon={<Share />}
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                    {content.length === 0 ? (
                        <p className="text-white font-semibold text-xl">No content available.</p>
                    ) : (
                        content.map((item: any) => (
                            <Card
                                key={item._id}
                                title={item.title}
                                link={item.link}
                                type={item.type}
                                cardId={item._id}
                                onDelete={deleteContent} // Pass delete function as prop
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;




