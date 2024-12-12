"use strict";
// import { NextFunction, Request, Response } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";
// const JWT_PASS = "vineet"
// export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     const header = req.headers["authorization"];
//     const decoded = jwt.verify(header as string, JWT_PASS)
//     if (decoded) {
//         if (typeof decoded === "string") {
//             res.status(403).json({
//                 message: "You are not logged in"
//             })
//             return;    
//         }
//         // ***************************************\\
//         //@ts-ignore
//         req.userId = (decoded as JwtPayload).id;
//         next()
//     } else {
//         res.status(403).json({
//             message: "You are not logged in"
//         })
//     }
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_PASS = "vineet"; // Ideally, move this to an environment variable
const userMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
    // if (!header) {
    //     res.status(403).json({
    //     message: "Authorization token is missing",
    // });
    // return;
    // }
    // const token = header.split(" ")[1]; // Bearer <token>
    if (!token) {
        res.status(403).json({
            message: "Token is missing",
        });
        return;
    }
    try {
        // Verifying and decoding the token
        const decoded = jsonwebtoken_1.default.verify(token, JWT_PASS);
        // Attach user id to request
        //@ts-ignore
        console.log(decoded);
        //@ts-ignore
        req.userId = decoded.id;
        //@ts-ignore
        console.log(req.userId);
        next(); // Proceed to the next middleware or route handler
    }
    catch (error) {
        res.status(403).json({
            message: "Invalid or expired token" + error,
        });
        return;
    }
};
exports.userMiddleware = userMiddleware;
