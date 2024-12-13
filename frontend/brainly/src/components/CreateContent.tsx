import { Cross } from "../icons/Cross"
import Button from "./Button"

interface create{
    open: boolean,
    onClose:()=>void
}
const CreateContent = ({open,onClose}:create) => {
    return (<div>
        {open && <div className=" fixed top-0 left-0 flex justify-center bg-slate-900 opacity-60 h-screen w-screen absolute">
            <div className=" flex flex-col justify-center  ">
                <span className="bg-white rounded-md opacity-100 p-4">
                    <div className=" flex justify-end cursor-pointer" onClick={onClose}>
                        <Cross />
                    </div>
                    <div className=" flex flex-col gap-4 ">
                        <label htmlFor="title" className=" font-semibold">Title</label>
                        <input type="text" id="title" className=" p-2 bg-slate-200 outline-none text-slate-900 rounded-md"  placeholder="title" />
                        <label htmlFor="link" className=" font-semibold">Link</label>
                        <input type="text" id="link" placeholder="Link" className=" p-2 bg-slate-200 outline-none  text-slate-900 rounded-md"/>
                    </div>
                    <div className=" flex justify-center mt-4">
                    <Button variant="primary" text="Submit" />
                    </div>
                </span>
            </div>

        </div>}
    </div>
    )
}

export default CreateContent
