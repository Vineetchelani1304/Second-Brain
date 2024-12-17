// import { Axios } from "axios";
import { useRef, useState } from "react"
import axios from "axios"
import { Backend_url } from "../config";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const userNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [load, setLoad] = useState(false)
    const Navigate = useNavigate()

    async function signup() {
        const username = userNameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        console.log(username, email, password);

        if (!load) {
            setLoad(true)
            const res = await axios.post("http://localhost:8888/auth/signup", {
                username: username,
                email: email,
                password: password
            })
            console.log(res)
            if (res) {
                setLoad(false);
                Navigate('/signin')
            }
        }

    }
    return (
        <div className=" h-screen w-screen bg-black flex flex-col gap-4 items-center justify-center">
            <h1 className=" text-4xl font-bold text-white">Signup</h1>
            <div className=" bg-black text flex flex-col items-center justify-center gap-4  rounded-2xl border p-4">
                <div className=" flex flex-col ">
                    <label className=" font-semibold text-white" htmlFor="username">User Name</label>
                    <input type="text" ref={userNameRef} id="username" placeholder="Email..." className="  rounded-lg p-2 outline-none" />
                </div>
                <div className=" flex flex-col ">
                    <label className=" font-semibold text-white" htmlFor="email">Email</label>
                    <input type="text" ref={emailRef} id="email" placeholder="Email..." className="  rounded-lg p-2 outline-none" />
                </div>
                <div className=" flex flex-col ">
                    <label className=" font-semibold text-white" htmlFor="pass">Password</label>
                    <input type="password" ref={passwordRef} id="pass" placeholder="Password" className="rounded-lg p-2 outline-none" />
                </div>
                <div className=" flex justify-start hover:cursor-pointer text-blue-600 font-light " onClick={()=>{
                    Navigate("/signin")
                }}>
                    Already Have an account ?
                </div>
                <button className=" w-full mt-1 outline-white p-2 bg-gray-600 font-semibold rounded-lg" onClick={signup}>{load? "Loading..." : "Signup"}</button>
            </div>

        </div>
    )
}

export default Signup
