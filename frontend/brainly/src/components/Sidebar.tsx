// import { useNavigate } from "react-router-dom";
// import { Brainly } from "../icons/Brainly";
// import { Logout } from "../icons/Logout";
// import { Tweet } from "../icons/Tweet";
// import { Yt } from "../icons/Yt";
// import SidebarItem from "./SidebarItem";

// const Sidebar = () => {
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         localStorage.removeItem("token");
//         navigate('/signin'); // Correct spelling of 'navigate'
//     };

//     return (
//         <div className="w-[15%] border-r h-screen fixed absolute flex flex-col justify-between bg-black text-white">
//             <div>
//                 <div className="flex justify-center items-center mt-2">
//                     <Brainly />
//                     <h1 className="text-4xl font-semibold text-center">Brainly</h1>
//                 </div>
//                 <div className="mt-4">
//                     <SidebarItem text="Youtube" icons={<Yt />} />
//                     <SidebarItem text="Tweet" icons={<Tweet />} />
//                 </div>
//             </div>
//             <div className="top-80" onClick={handleLogout}>
//                 <SidebarItem text="Logout" icons={<Logout />} />
//             </div>
//         </div>
//     );
// };


// export default Sidebar


import { useNavigate } from "react-router-dom";
import { Brainly } from "../icons/Brainly";
import { Logout } from "../icons/Logout";
import { Tweet } from "../icons/Tweet";
import { Yt } from "../icons/Yt";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/signin');
    };

    return (
        <div className="w-[15%] h-screen fixed top-0 left-0 flex flex-col justify-between bg-black text-white border-r">
            <div>
                <div className="flex justify-center items-center mt-4">
                    <Brainly />
                    <h1 className="text-4xl font-semibold ml-2">Brainly</h1>
                </div>
                <div className="mt-8">
                    <SidebarItem text="All"/>
                    <SidebarItem text="Youtube" icons={<Yt />} />
                    <SidebarItem text="Tweet" icons={<Tweet />} />
                </div>
            </div>
            <div className="mb-4" onClick={handleLogout}>
                <SidebarItem text="Logout" icons={<Logout />} />
            </div>
        </div>
    );
};

export default Sidebar;
