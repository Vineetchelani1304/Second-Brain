import Button from "../components/Button";
import { Share } from "../icons/share";
import { Plusicon } from "../icons/Plusicon";
import Card from "../components/Card";
import CreateContent from "../components/CreateContent";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import ShareContent from "../components/ShareContent";

const Dashboard: React.FC = () => {
    const [modalOpen, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await axios.get("http://localhost:8888/content/getContent", {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                });
                console.log("Fetched content:", response.data.data);
                setContent(response.data.data); // Set the fetched content
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        };

        fetchContent();
    }, []);

    return (
        <div className="bg-black h-screen flex">
            <Sidebar />
            <div className="flex-1 h-screen pt-2 px-3 ml-[15%] overflow-auto">
                <CreateContent open={modalOpen} onClose={() => setModal(false)} />
                <ShareContent isOpen={isOpen} setIsOpen={() =>setIsOpen(false)} />
                <div className="flex justify-between">
                    <h2 className="font-semibold text-3xl ml-1 text-slate-200">All Content</h2>
                    <div className="flex justify-end gap-3">
                        <Button
                            variant="primary"
                            text="Add Content"
                            startIcon={<Plusicon />}
                            onClick={() => setModal(true)}
                        />
                        <Button variant="secondry" text="Share Brain" startIcon={<Share />} onClick={()=>setIsOpen(true)} />
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                    {content.length === 0 ? (
                        <p className="text-white">No content available.</p>
                    ) : (
                        content.map((item: any) => (
                            <Card
                                key={item._id} 
                                title={item.title}
                                link={item.link}
                                type={item.type}
                                cardId={item._id}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
