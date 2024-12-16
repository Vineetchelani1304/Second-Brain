import { Request, Response } from "express"
import { contentmodel, linkmodel, UserModel } from "../db";

export const share = async (req: Request, res: Response) => {
    const hash = (length: number): string => {
        let options = "abcdefghijklmnopqrstuvwxyz0123456789";
        let ans = "";
        for (let i = 0; i < length; i++) {
            ans += options[Math.floor(Math.random() * length)]
        }
        return ans;
    }

    const share = req.body.share;
    if (share) {
        const existing = await linkmodel.findOne({
            //@ts-ignore
            userId:req.userId,
        })
        if(existing){
            res.json({
                message:"already exist",
                link:"/share/"+existing.hash,
            })
            return;
        }
        const shareablelink = await linkmodel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash(10),
        })
        res.json({
            message: "share enable ",
            data: shareablelink
        })
        return;
    }
    else {
        await linkmodel.deleteOne({
            //@ts-ignore
            userId: req.userId,
        })
        res.json({
            message: "share disable",
        })
        return;
    }
}


export const shareLink = async (req: Request, res: Response) => {
    try {
        const hash = req.params.sharelink;
        const link = await linkmodel.findOne({
            hash
        })
        if (!link) {
            res.status(411).json({
                message: "share link is missing"
            })
            return;
        }
        const user = await UserModel.findOne({
            _id: link.userId,
        })
        const content = await contentmodel.find({
            userId: link.userId,
        })
        console.log(user);
        console.log(content);
        if (user && content) {
            res.json({
                username: user.username,
                content: content,
            })
        }
        else {
            res.status(404).json({
                message: "user or content not found"
            })
            return;
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error,
        })
        return;
    }
}