// import { Close } from "../icons/Close";
// import { Open } from "../icons/Open";
import { Brainly } from "../icons/Brainly";
import { Tweet } from "../icons/Tweet";
import { Yt } from "../icons/Yt";
import SidebarItem from "./SidebarItem";

// export interface Bar {
//     bar: boolean; // State variable indicating if the sidebar is visible
//     setBar: () => void; // State setter function
// }

const Sidebar: React.FC = (/*props: Bar}*/) => {
    return (
        <div className="w-[15%] border h-screen absolute  bg-slate-400 text-white">
            <div className = " flex justify-center items-center mt-2">
                <Brainly />
                <h1 className=" text-4xl text-black font-semibold text-center">Brainly</h1>
            </div>
            <div className=" mt-4">
                <SidebarItem text="Youtube" icons={<Yt />} />
                <SidebarItem text="Tweet" icons={<Tweet />} />
            </div>
        </div>
    );
};

export default Sidebar;
