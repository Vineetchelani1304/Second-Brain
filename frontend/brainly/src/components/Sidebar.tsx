import { useNavigate } from "react-router-dom";
import { Brainly } from "../icons/Brainly";
import { Logout } from "../icons/Logout";
import { Tweet } from "../icons/Tweet";
import { Yt } from "../icons/Yt";
import SidebarItem from "./SidebarItem";

const Sidebar: React.FC = (/*props: Bar}*/) => {
    const Navgigate = useNavigate()
    function Logout(){
        localStorage.removeItem("token")
        Navgigate('/signin')
    }
    return (
        <div className="w-[15%] border-r h-screen absolute flex flex-col justify-between  bg-black text-white">
            <div>
                <div className=" flex justify-center items-center mt-2">
                    <Brainly />
                    <h1 className=" text-4xl  font-semibold text-center">Brainly</h1>
                </div>
                <div className=" mt-4">
                    <SidebarItem text="Youtube" icons={<Yt />} />
                    <SidebarItem text="Tweet" icons={<Tweet />} />
                </div>
            </div>
            {/* <div className=" top-80" onClick={Logout}>
                <SidebarItem text="Logout" icons={<Logout />} />
            </div> */}
        </div>
    );
};

export default Sidebar;
