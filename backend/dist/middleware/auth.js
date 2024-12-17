"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const JWT_PASS = process.env.JWT_PASSWORD || "vineet";
const userMiddleware = (req, res, next) => {
    const token = req.headers["authorization"];
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
