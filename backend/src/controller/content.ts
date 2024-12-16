import { Request, Response } from 'express';
import { contentmodel } from '../db';

export const createContent = async (req: Request, res: Response) => {
    try {
        const { link, type, title } = req.body;
        //@ts-ignore
        const userId = req.userId;

        // Validate required fields
        // if (!link || !type || !title || !tags) {
        //     res.status(400).json({
        //         message: 'All fields (link, type, title, tags, userId) are required',
        //     });
        //     return;
        // }

        // Create a new content document
        const newContent = await contentmodel.create({
            link,
            type,
            title,
            // tags,
            //@ts-ignore
            userId: req.userId,
        });

        // Send a success response
        res.status(201).json({
            message: 'Content created successfully',
            content: newContent,
        });
        return;
    } catch (error) {
        console.error('Error creating content:', error);
        res.status(500).json({
            message: 'Internal server error',
            error,
        });
        return
    }
};
export const getContent = async (req: Request, res: Response) => {
    try {
        //@ts-ignore
        const userId = req.userId;
        if (!userId) {
            res.status(401).json({
                message: " user id is missing"
            })
            return;
        }
        const content = await contentmodel.find({userId}).populate({
            path: "userId",
            select: "username password"
        })
        res.status(200).json({
            data: content
        })
    } catch (error) {
        console.log('Error getting content:', error);
    }
}

export const deleteContent = async (req: Request, res: Response) => {

    const contentId = req.body.contentId;
    if(!contentId) {
        res.status(402).json({
            message : "Content id is missing"
        })
        return;
    }
    await contentmodel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
    return;

}