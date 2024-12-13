import { Close } from "../icons/Close";
import { Open } from "../icons/Open";

export interface Bar {
  bar: boolean; // State variable indicating if the sidebar is visible
  setBar: () => void; // State setter function
}

const Sidebar: React.FC<Bar> = (props: Bar) => {
  return (
    <div
      className={
        props.bar
          ? "w-[20%] border h-screen absolute  bg-gray-800 text-white"
          : "w-[2%] border h-screen flex absolute justify-center bg-gray-800 text-white"
      }
    >
      <div onClick={props.setBar} className="p-4 cursor-pointer">
        {props.bar ? <Close /> : <Open />}
      </div>
    </div>
  );
};

export default Sidebar;
