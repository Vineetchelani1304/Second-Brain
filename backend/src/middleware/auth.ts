import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_PASS = "vineet"; 

export const userMiddleware = (req: Request, res: Response, next: NextFunction):void => {
    const token = req.headers["authorization"];
    if (!token) {
        res.status(403).json({
            message: "Token is missing",
        });
        return;
    }

    try {
        // Verifying and decoding the token
        const decoded = jwt.verify(token, JWT_PASS) as JwtPayload;

        // Attach user id to request
        //@ts-ignore
        console.log(decoded)
        //@ts-ignore
        req.userId = decoded.id;
        //@ts-ignore
        console.log(req.userId)

        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(403).json({
            message: "Invalid or expired token"+error,   
        });
        return 
    }
};
