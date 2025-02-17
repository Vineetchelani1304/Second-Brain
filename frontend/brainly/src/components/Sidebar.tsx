// // import { useNavigate } from "react-router-dom";
// // import { Brainly } from "../icons/Brainly";
// // import { Logout } from "../icons/Logout";
// // import { Tweet } from "../icons/Tweet";
// // import { Yt } from "../icons/Yt";
// // import SidebarItem from "./SidebarItem";

// // const Sidebar = () => {
// //     const navigate = useNavigate();

// //     const handleLogout = () => {
// //         localStorage.removeItem("token");
// //         navigate('/signin');
// //     };

// //     return (
// //         <div className="w-[15%] h-screen fixed top-0 left-0 flex flex-col justify-between bg-black text-white border-r">
// //             <div>
// //                 <div className="flex justify-center items-center mt-4">
// //                     <Brainly />
// //                     <h1 className="text-4xl font-semibold ml-2">Brainly</h1>
// //                 </div>
// //                 <div className="mt-8">
// //                     <div>
// //                         <SidebarItem text="All" />
// //                     </div>
// //                     <div>
// //                         <SidebarItem text="Youtube" icons={<Yt />} />
// //                     </div>
// //                     <div>
// //                         <SidebarItem text="Tweet" icons={<Tweet />} />
// //                     </div>
// //                 </div>
// //             </div>
// //             <div className="mb-4" onClick={handleLogout}>
// //                 <SidebarItem text="Logout" icons={<Logout />} />
// //             </div>
// //         </div>
// //     );
// // };

// // export default Sidebar;



// import { Navigate, useNavigate } from "react-router-dom";
// import { Brainly } from "../icons/Brainly";
// import { Logout } from "../icons/Logout";
// import { Tweet } from "../icons/Tweet";
// import { Yt } from "../icons/Yt";
// import SidebarItem from "./SidebarItem";
// import { All } from "../icons/All";

// interface SidebarProps {
//     setFilter: (filter: string) => void; // Accept setFilter as a prop
// }

// const Sidebar: React.FC<SidebarProps> = ({ setFilter }) => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         navigate("/signin");
//     };

//     return (
//         <div className="w-[15%] h-screen fixed top-0 left-0 flex flex-col justify-between bg-black text-white border-r">
//             <div>
//                 <div className="flex hover:cursor-pointer justify-center items-center mt-4" onClick={()=>{
//                    navigate("/") 
//                 }}>
//                     <Brainly />
//                     <h1 className="text-4xl font-semibold ml-2 ml-10">Brainly</h1>
//                 </div>
//                 <div className="mt-8">
//                     <div onClick={() => setFilter("All")}>
//                         <SidebarItem icons={<All/>} text="All" />
//                     </div>
//                     <div onClick={() => setFilter("Youtube")}>
//                         <SidebarItem text="Youtube" icons={<Yt />} />
//                     </div>
//                     <div onClick={() => setFilter("Twitter")}>
//                         <SidebarItem text="Tweet" icons={<Tweet />} />
//                     </div>
//                 </div>
//             </div>
//             <div className="mb-4" onClick={handleLogout}>
//                 <SidebarItem text="Logout" icons={<Logout />} />
//             </div>
//         </div>
//     );
// };

// export default Sidebar;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Brainly } from "../icons/Brainly";
import { Logout } from "../icons/Logout";
import { Tweet } from "../icons/Tweet";
import { Yt } from "../icons/Yt";
import { All } from "../icons/All";
import SidebarItem from "./SidebarItem";
import { Menu, X } from "lucide-react";

interface SidebarProps {
    setFilter: (filter: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setFilter }) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // Sidebar open state

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    };

    return (
        <>
            {/* Mobile Sidebar Toggle Button */}
            <button
                className="md:hidden fixed top-4 left-4 text-white bg-gray-800 p-2 rounded-md z-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-black text-white border-r z-50 transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-64 md:w-60`}
            >
                <div className="flex flex-col h-full justify-between">
                    {/* Sidebar Top Section */}
                    <div>
                        <div
                            className="flex justify-center items-center py-4 cursor-pointer border-b border-gray-700"
                            onClick={() => navigate("/")}
                        >
                            <Brainly />
                            <h1 className="text-3xl font-semibold ml-2 truncate">Brainly</h1>
                        </div>

                        {/* Sidebar Items */}
                        <div className="mt-6 space-y-4 px-4">
                            <div onClick={() => setFilter("All")}>
                                <SidebarItem icons={<All />} text="All" />
                            </div>
                            <div onClick={() => setFilter("Youtube")}>
                                <SidebarItem text="Youtube" icons={<Yt />} />
                            </div>
                            <div onClick={() => setFilter("Twitter")}>
                                <SidebarItem text="Tweet" icons={<Tweet />} />
                            </div>
                        </div>
                    </div>

                    {/* Logout Button */}
                    <div className="mb-6 px-4" onClick={handleLogout}>
                        <SidebarItem text="Logout" icons={<Logout />} />
                    </div>
                </div>
            </div>

            {/* Sidebar Overlay for mobile */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsOpen(false)}></div>
            )}
        </>
    );
};

export default Sidebar;
