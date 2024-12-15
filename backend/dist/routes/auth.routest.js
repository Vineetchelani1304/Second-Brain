"use strict";
// import router from "express"
// import { signup } from "../controller/auth";
Object.defineProperty(exports, "__esModule", { value: true });
// const authRouter  = router();
// authRouter.post("/asldjflsdjf",signup)
// export default authRouter;
const express_1 = require("express");
const auth_1 = require("../controller/auth");
const authrouter = (0, express_1.Router)();
authrouter.post("/signup", auth_1.signup);
authrouter.post('/signin', auth_1.signin);
exports.default = authrouter;
