// import router from "express"
// import { signup } from "../controller/auth";


// const authRouter  = router();


// authRouter.post("/asldjflsdjf",signup)

// export default authRouter;



import { Router } from "express";
import { signup,signin } from "../controller/auth";
const authrouter = Router();

authrouter.post("/signup",signup)
authrouter.post('/signin',signin)
export default authrouter;