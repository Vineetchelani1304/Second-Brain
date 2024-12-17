import express, {Request,Response} from "express";
import { UserModel } from "../db";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import 'dotenv/config'
const JWT_PASS = process.env.JWT_PASSWORD || "vineet"
export const signup= async(req:Request, res:Response)=>{
    try {
        const username= req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        if(!username || !password || !email) {
            res.status(403).json({
                message:"need all credentials"
            })
        }
        else{
            if(await UserModel.findOne({email})){
                res.status(401).json({
                    message:"email already exists"
                })
            }
            else{
                const hashpass = await bcrypt.hash(password,10);
                const user = await UserModel.create({
                    username: username,
                    email: email,
                    password: hashpass
                })
                if(user){
                    res.status(200).json({
                        message:"successfull on creating user"
                    })
                }
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:`error from server side ${error}`
        })
    }
}

export const signin= async(req:Request, res:Response)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        if(!email || !password){
            res.status(401).json({
                message:"enter all credentials"
            })
            return;
        }
        else{
            const existingUser = await UserModel.findOne({ email });
            if(existingUser){
                if(await bcrypt.compare(password, existingUser.password))
                {const token = jwt.sign({
                    id : existingUser._id,
                    email : email
                },JWT_PASS)
                res.status(200).json({
                    message:"user loged in",
                    token:token,
                })}
            }
            else {
                res.status(403).json({
                    message: "Incorrrect credentials"
                })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error"+error
        })
    }
}