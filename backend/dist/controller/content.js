"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContent = exports.getContent = exports.createContent = void 0;
const db_1 = require("../db");
const createContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { link, type, title, tags } = req.body;
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
        const newContent = yield db_1.contentmodel.create({
            link,
            type,
            title,
            tags,
            //@ts-ignore
            userId: req.userId,
        });
        // Send a success response
        res.status(201).json({
            message: 'Content created successfully',
            content: newContent,
        });
        return;
    }
    catch (error) {
        console.error('Error creating content:', error);
        res.status(500).json({
            message: 'Internal server error',
            error,
        });
        return;
    }
});
exports.createContent = createContent;
const getContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const userId = req.userId;
        if (!userId) {
            res.status(401).json({
                message: " user id is missing"
            });
            return;
        }
        const content = yield db_1.contentmodel.find().populate({
            path: "userId",
            select: "username password"
        });
        res.status(200).json({
            content
        });
    }
    catch (error) {
        console.log('Error getting content:', error);
    }
});
exports.getContent = getContent;
const deleteContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    if (!contentId) {
        res.status(402).json({
            message: "Content id is missing"
        });
        return;
    }
    yield db_1.contentmodel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    });
    res.json({
        message: "Deleted"
    });
    return;
});
exports.deleteContent = deleteContent;
