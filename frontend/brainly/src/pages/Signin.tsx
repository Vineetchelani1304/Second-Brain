import axios from "axios"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const Signin = () => {

    const emailRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const [load,setLoad] = useState(false)

    const Navigate = useNavigate()

    async function login() {
        const email = emailRef.current?.value;
        const password = passRef.current?.value;

        console.log(email, password);

        if (!load) {
            setLoad(true)
            const res = await axios.post("http://localhost:8888/auth/signin", {
                email: email,
                password: password
            })
            console.log(res.data.token)
            localStorage.setItem("token", res.data.token)
            if (res) {
                setLoad(false);
                Navigate('/dashboard')
            }
        }

        // alert("signUp successfull")


    }

    return (
        <div className=" h-screen w-screen bg-black flex flex-col gap-4 items-center justify-center">
            <h1 className=" text-4xl font-bold text-white">Login</h1>
            <div className=" shadow-md border bg-black flex flex-col items-center justify-center gap-4  rounded-2xl p-4">
                <div className=" flex flex-col">
                    <label className=" font-semibold text-white" htmlFor="email">Email</label>
                    <input type="text" ref={emailRef} id="email" placeholder="Email..." className="  rounded-lg p-2 outline-none" />
                </div>
                <div className=" flex flex-col ">
                    <label className=" font-semibold text-white" htmlFor="pass">Password</label>
                    <input type="password" ref={passRef} id="pass" placeholder="Password" className=" rounded-lg p-2 text-black outline-none" />
                </div>
                <button onClick={login} className=" p-3 transition-all w-full mt-5 bg-gray-600 font-semibold rounded-lg">{load ? "Loading..." : "Login"}</button>
            </div>

        </div>
    )
}

export default Signin
