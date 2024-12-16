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
exports.shareLink = exports.share = void 0;
const db_1 = require("../db");
const share = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = (length) => {
        let options = "abcdefghijklmnopqrstuvwxyz0123456789";
        let ans = "";
        for (let i = 0; i < length; i++) {
            ans += options[Math.floor(Math.random() * length)];
        }
        return ans;
    };
    const share = req.body.share;
    if (share) {
        const existing = yield db_1.linkmodel.findOne({
            //@ts-ignore
            userId: req.userId,
        });
        if (existing) {
            res.json({
                message: "already exist",
                link: "/share/" + existing.hash,
            });
            return;
        }
        const shareablelink = yield db_1.linkmodel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash(10),
        });
        res.json({
            message: "share enable ",
            data: shareablelink
        });
        return;
    }
    else {
        yield db_1.linkmodel.deleteOne({
            //@ts-ignore
            userId: req.userId,
        });
        res.json({
            message: "share disable",
        });
        return;
    }
});
exports.share = share;
const shareLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hash = req.params.sharelink;
        const link = yield db_1.linkmodel.findOne({
            hash
        });
        if (!link) {
            res.status(411).json({
                message: "share link is missing"
            });
            return;
        }
        const user = yield db_1.UserModel.findOne({
            _id: link.userId,
        });
        const content = yield db_1.contentmodel.find({
            userId: link.userId,
        });
        console.log(user);
        console.log(content);
        if (user && content) {
            res.json({
                username: user.username,
                content: content,
            });
        }
        else {
            res.status(404).json({
                message: "user or content not found"
            });
            return;
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: error,
        });
        return;
    }
});
exports.shareLink = shareLink;
