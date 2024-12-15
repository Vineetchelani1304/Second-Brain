const Signin = () => {
    return (
        <div className=" h-screen w-screen bg-slate-950 flex flex-col gap-4 items-center justify-center">
            <h1 className=" text-4xl font-bold text-white">Signup</h1>
            <div className=" shadow-md bg-slate-100 flex flex-col items-center justify-center gap-4  rounded-lg p-4">
                <div className=" flex flex-col text-black ">
                    <label className=" font-semibold" htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Email..." className=" bg-slate-300 rounded-lg p-2 outline-none" />
                </div>
                <div className=" flex flex-col text-black ">
                    <label className=" font-semibold" htmlFor="pass">Password</label>
                    <input type="password" id="pass" placeholder="Password" className=" bg-slate-300 rounded-lg p-2 outline-none" />
                </div>
                <button className=" p-3 transition-all bg-slate-950 text-white font-semibold rounded-lg">Signup</button>
            </div>

        </div>
    )
}

export default Signin
