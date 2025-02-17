// import { useState, useEffect } from "react";
// import CreateContent from "../components/CreateContent";
// import axios from "axios";
// import Card from "../components/Card";
// import Button from "../components/Button";
// import { Plusicon } from "../icons/Plusicon";
// import Sidebar from "../components/Sidebar";
// import { Share } from "../icons/share";
// import { Menu, X } from "lucide-react";
// import ShareContent from "../components/ShareContent";

// const Dashboard: React.FC = () => {
//     const [modalOpen, setModal] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [content, setContent] = useState([]);
//     const [filter, setFilter] = useState("All");

//     // Fetch the content initially
//     const fetchContent = async () => {
//         try {
//             const response = await axios.get("http://localhost:8000/content/getContent", {
//                 headers: {
//                     Authorization: localStorage.getItem("token"),
//                 },
//             });
//             setContent(response.data.data); // Set the fetched content
//         } catch (error) {
//             console.error("Error fetching content:", error);
//         }
//     };

//     const deleteContent = async (contentId: string) => {
//         try {
//             const response = await axios.delete("http://localhost:8000/content/deleteContent", {
//                 headers: {
//                     Authorization: localStorage.getItem("token"),
//                 },
//                 data: { contentId },
//             });
//             console.log("Content deleted successfully:", response.data);
//             setContent(content.filter((item) => item._id !== contentId));
//         } catch (error) {
//             console.error("Error deleting content:", error);
//             alert("Failed to delete content. Please try again.");
//         }
//     };

//     const addContent = (newContent: any) => {
//         setContent([...content, newContent]);
//     };

//     useEffect(() => {
//         fetchContent();
//     }, []);

//     const filteredContent = filter === "All" ? content : content.filter((item) => item.type === filter);

//     return (
//         <div className="bg-black h-screen flex relative">
//             {/* Sidebar */}
//             <div
//                 className={`fixed top-0 left-0 h-full bg-gray-900 z-50 transform transition-transform duration-300 md:static md:translate-x-0 ${
//                     sidebarOpen ? "translate-x-0" : "-translate-x-full"
//                 } w-64`}
//             >
//                 <Sidebar setFilter={setFilter} /> {/* Pass setFilter to Sidebar */}
//             </div>

//             {/* Overlay for Sidebar on small screens */}
//             {sidebarOpen && (
//                 <div
//                     className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//                     onClick={() => setSidebarOpen(false)}
//                 ></div>
//             )}

//             <div className="flex-1 h-screen pt-2 px-3 overflow-auto">
//                 {/* Header */}
//                 <div className="flex justify-between items-center mb-4 md:hidden">
//                     <button
//                         onClick={() => setSidebarOpen(!sidebarOpen)}
//                         className="text-white p-2"
//                     >
//                         {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
//                     </button>
//                     <h2 className="font-semibold text-2xl text-slate-200">{filter} Content</h2>
//                 </div>

//                 {/* Modals */}
//                 <CreateContent
//                     open={modalOpen}
//                     onClose={() => setModal(false)}
//                     onContentAdded={addContent}
//                 />
//                 <ShareContent isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />

//                 {/* Header for larger screens */}
//                 <div className="hidden md:flex justify-between">
//                     <h2 className="font-semibold text-3xl text-slate-200">{filter} Content</h2>
//                     <div className="flex justify-end gap-3">
//                         <Button
//                             variant="primary"
//                             text="Add Content"
//                             startIcon={<Plusicon />}
//                             onClick={() => setModal(true)}
//                         />
//                         <Button
//                             variant="secondry"
//                             text="Share Brain"
//                             startIcon={<Share />}
//                             onClick={() => setIsOpen(true)}
//                         />
//                     </div>
//                 </div>

//                 {/* Content */}
//                 <div className="flex flex-wrap gap-4 mt-6">
//                     {filteredContent.length === 0 ? (
//                         <p className="text-white font-semibold text-xl">No content available.</p>
//                     ) : (
//                         filteredContent.map((item: any) => (
//                             <Card
//                                 key={item._id}
//                                 title={item.title}
//                                 link={item.link}
//                                 type={item.type}
//                                 cardId={item._id}
//                                 onDelete={deleteContent}
//                             />
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;



import { useState, useEffect } from "react";
import CreateContent from "../components/CreateContent";
import axios from "axios";
import Card from "../components/Card";
import Button from "../components/Button";
import { Plusicon } from "../icons/Plusicon";
import Sidebar from "../components/Sidebar";
import { Share } from "../icons/share";
import { Menu, X } from "lucide-react";
import ShareContent from "../components/ShareContent";

const Dashboard: React.FC = () => {
    const [modalOpen, setModal] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [content, setContent] = useState([]);
    const [filter, setFilter] = useState("All");

    // Fetch content initially
    const fetchContent = async () => {
        try {
            const response = await axios.get("http://localhost:8000/content/getContent", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            setContent(response.data.data); // Set the fetched content
        } catch (error) {
            console.error("Error fetching content:", error);
        }
    };

    const deleteContent = async (contentId: string) => {
        try {
            const response = await axios.delete("http://localhost:8000/content/deleteContent", {
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
                data: { contentId },
            });
            console.log("Content deleted successfully:", response.data);
            setContent(content.filter((item) => item._id !== contentId));
        } catch (error) {
            console.error("Error deleting content:", error);
            alert("Failed to delete content. Please try again.");
        }
    };

    const addContent = (newContent: any) => {
        setContent([...content, newContent]);
    };

    useEffect(() => {
        fetchContent();
    }, []);

    const filteredContent = filter === "All" ? content : content.filter((item) => item.type === filter);

    return (
        <div className="bg-black h-screen flex relative">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-900 z-50 transform transition-transform duration-300 md:static md:translate-x-0 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } w-64`}
            >
                <Sidebar setFilter={setFilter} />
            </div>

            {/* Overlay for Sidebar on small screens */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setSidebarOpen(false)}></div>
            )}

            <div className="flex-1 h-screen pt-2 px-3 overflow-auto">
                {/* Header for small screens */}
                <div className="flex justify-between items-center mb-4 md:hidden">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-white p-2">
                        {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                    <h2 className="font-semibold text-2xl text-slate-200">{filter} Content</h2>
                    
                    {/* Buttons for small screens */}
                    <div className="flex gap-2">
                        <button 
                            className="bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center"
                            onClick={() => setModal(true)}
                        >
                            <Plusicon className="mr-1" /> Add
                        </button>
                        <button 
                            className="bg-gray-600 text-white px-3 py-1 rounded-lg flex items-center"
                            onClick={() => setIsOpen(true)}
                        >
                            <Share className="mr-1" /> Share
                        </button>
                    </div>
                </div>

                {/* Modals */}
                <CreateContent open={modalOpen} onClose={() => setModal(false)} onContentAdded={addContent} />
                <ShareContent isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />

                {/* Header for larger screens */}
                <div className="hidden md:flex justify-between flex-wrap gap-2">
                    <h2 className="font-semibold text-3xl text-slate-200">{filter} Content</h2>
                    <div className="flex gap-1 flex-wrap">
                        <Button
                            variant="primary"
                            text="Add Content"
                            startIcon={<Plusicon />}
                            onClick={() => setModal(true)}
                            className="px-4 py-2"
                        />
                        <Button
                            variant="secondry"
                            text="Share Brain"
                            startIcon={<Share />}
                            onClick={() => setIsOpen(true)}
                            className="px-4 py-2"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-wrap gap-4 mt-6">
                    {filteredContent.length === 0 ? (
                        <p className="text-white font-semibold text-xl">No content available.</p>
                    ) : (
                        filteredContent.map((item: any) => (
                            <Card
                                key={item._id}
                                title={item.title}
                                link={item.link}
                                type={item.type}
                                cardId={item._id}
                                onDelete={deleteContent}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
