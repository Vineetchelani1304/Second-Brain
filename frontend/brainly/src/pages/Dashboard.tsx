import Button from "../components/Button";
import { Share } from "../icons/share";
import { Plusicon } from "../icons/Plusicon";
import Card from "../components/Card";
import CreateContent from "../components/CreateContent";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Dashboard: React.FC = () => {
    const [modalOpen, setModal] = useState(true)

    // const [bar, SetBar] = useState(true)
    const [content, setContent] = useState([]);
    useEffect(() => {
        // Wrap the API call in an async function
        const fetchContent = async () => {
            try {
                const response = await axios.get("http://localhost:8888/content/getContent", {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                });
                console.log(response)
                console.log("Fetched content:", response.data.data);
                setContent(response.data.data); // Set the fetched content
                console.log(response.data.data[1]._id)
            } catch (error) {
                console.error("Error fetching content:", error);
            }
        };

        fetchContent(); // Call the async function
    }, []);
    return (
        <div className=" bg-black">
            <Sidebar /*bar={bar} setBar={() => {
            SetBar(e => !e)
        }}*/ />
            <div className=" h-screen  pt-2 px-3 ml-[15%]">
                <CreateContent open={modalOpen} onClose={() => {
                    setModal(false)
                }} />
                <div className=" flex  justify-between">
                    <h2 className=" font-semibold text-3xl ml-1 text-slate-200">All Content</h2>
                    <div className=" flex justify-end gap-3">
                        <Button variant="primary" text="Add Content" startIcon={<Plusicon />} onClick={() => setModal(true)} />
                        <Button variant="secondry" text="Share Brain" startIcon={<Share />} />
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                    {content.length === 0 ? (
                        <p className="text-white">No content available.</p>
                    ) : (
                        content.map((item: any) => (
                            <Card
                                title={item.title}
                                link={item.link}
                                type={item.type}
                                cardId={item._id} // Passing the card ID from the fetched content
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
