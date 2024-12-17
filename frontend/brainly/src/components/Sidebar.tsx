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
//         navigate('/signin');
//     };

//     return (
//         <div className="w-[15%] h-screen fixed top-0 left-0 flex flex-col justify-between bg-black text-white border-r">
//             <div>
//                 <div className="flex justify-center items-center mt-4">
//                     <Brainly />
//                     <h1 className="text-4xl font-semibold ml-2">Brainly</h1>
//                 </div>
//                 <div className="mt-8">
//                     <div>
//                         <SidebarItem text="All" />
//                     </div>
//                     <div>
//                         <SidebarItem text="Youtube" icons={<Yt />} />
//                     </div>
//                     <div>
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



import { useNavigate } from "react-router-dom";
import { Brainly } from "../icons/Brainly";
import { Logout } from "../icons/Logout";
import { Tweet } from "../icons/Tweet";
import { Yt } from "../icons/Yt";
import SidebarItem from "./SidebarItem";
import { All } from "../icons/All";

interface SidebarProps {
    setFilter: (filter: string) => void; // Accept setFilter as a prop
}

const Sidebar: React.FC<SidebarProps> = ({ setFilter }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/signin");
    };

    return (
        <div className="w-[15%] h-screen fixed top-0 left-0 flex flex-col justify-between bg-black text-white border-r">
            <div>
                <div className="flex justify-center items-center mt-4">
                    <Brainly />
                    <h1 className="text-4xl font-semibold ml-2">Brainly</h1>
                </div>
                <div className="mt-8">
                    <div onClick={() => setFilter("All")}>
                        <SidebarItem icons={<All/>} text="All" />
                    </div>
                    <div onClick={() => setFilter("Youtube")}>
                        <SidebarItem text="Youtube" icons={<Yt />} />
                    </div>
                    <div onClick={() => setFilter("Twitter")}>
                        <SidebarItem text="Tweet" icons={<Tweet />} />
                    </div>
                </div>
            </div>
            <div className="mb-4" onClick={handleLogout}>
                <SidebarItem text="Logout" icons={<Logout />} />
            </div>
        </div>
    );
};

export default Sidebar;
