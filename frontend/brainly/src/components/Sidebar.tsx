export interface Bar {
    bar: boolean; // State variable indicating if the sidebar is visible
    setBar: React.Dispatch<React.SetStateAction<boolean>>; // State setter function
}

const Sidebar: React.FC<Bar> = (props: Bar) => {
    return (
        <div className={props.bar ? "h-screen w-[20%] bg-slate-800 text-slate-100" : ""}>
            <button
                onClick={() => props.setBar(!props.bar)} // Example usage of setBar
                className="text-white p-2"
            >
                Toggle Sidebar
            </button>
        </div>
    );
};

export default Sidebar;
