import { useRef, useState } from "react"
import { Cross } from "../icons/Cross"
import Button from "./Button"
import axios from "axios"

interface create {
    open: boolean,
    onClose: () => void
}
const CreateContent = ({ open, onClose }: create) => {
    enum contentType {
        youtube = "Youtube",
        twitter = "Twitter"
    }
    const [select, setSelect] = useState(contentType.youtube)
    const TitleRef = useRef<HTMLInputElement>(null)
    const LinkRef = useRef<HTMLInputElement>(null)
    const [load, setLoad] = useState(false)

    async function content() {
        const title = TitleRef.current?.value;
        const link = LinkRef.current?.value;
        const type = select;

        if (!title || !link) {
            alert("Please fill all the fields");
            return;
        }

        try {
            setLoad(true);

            const token = localStorage.getItem("token");
            console.log(token)
            if (!token) {
                alert("Authorization token missing. Please login again.");
                setLoad(false);
                return;
            }

            const res = await axios.post(
                "http://localhost:8000/content/createContent",
                {
                    title,
                    link,
                    type,
                },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );
            console.log(res);
            // alert("Content created successfully!");
            onClose();
        } catch (error) {
            console.error("Error creating content:", error);
            alert("Failed to create content. Please try again.");
        } finally {
            setLoad(false);
        }
    }

    return (<div>
        {open && <div className=" text-white top-0 left-0 flex justify-center opacity-100 backdrop-blur-sm h-screen w-screen absolute">
            <div className=" flex flex-col justify-center  ">
                <span className="bg-black border rounded-2xl p-4 px-6">
                    <div className=" flex  items-center justify-between mb-4">
                        <h1 className=" font-semibold text-xl">
                            Add Content
                        </h1>
                        <div className=" flex justify-end cursor-pointer" onClick={onClose}>
                            <Cross />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                        <label htmlFor="title" className=" font-semibold">Title</label>
                        <input type="text" ref={TitleRef} id="title" className=" p-2 bg-slate-200 outline-none text-slate-900 rounded-md" placeholder="title" />
                        <label htmlFor="link" className=" font-semibold">Link</label>
                        <input type="text" ref={LinkRef} id="link" placeholder="Link" className=" p-2 bg-slate-200 outline-none  text-slate-900 rounded-md" />
                        <div className=" flex justify-evenly items-center ">
                            <button className={select === "Youtube" ? "bg-gradient-to-b from-blue-500 to-blue-900 p-2 rounded-lg text-white" : "bg-gradient-to-r from-slate-900 to-slate-700 p-2 rounded-lg text-white border"} onClick={() => {
                                setSelect(contentType.youtube)
                            }}>Youtube</button>
                            <button onClick={() => {
                                setSelect(contentType.twitter)
                            }} className={select === "Twitter" ? "bg-gradient-to-b from-blue-500 to-blue-900 p-2 rounded-lg text-white" : "bg-gradient-to-r from-slate-900 to-slate-700 p-2 rounded-lg text-white border"}>Twitter</button>
                        </div>
                    </div>
                    <div className=" flex justify-center mt-4">
                        <Button variant="primary" onClick={content} text="Submit" />
                    </div>
                </span>
            </div>

        </div>}
    </div>
    )
}

export default CreateContent


