"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const content_1 = require("../controller/content");
const auth_1 = require("../middleware/auth");
const share_1 = require("../controller/share");
const content = (0, express_1.Router)();
// Route for creating content
content.post("/createContent", auth_1.userMiddleware, content_1.createContent);
// Route for deleting content by ID
content.delete("/deleteContent", auth_1.userMiddleware, content_1.deleteContent);
// Route for getting content (all or filtered)
content.get("/getContent", auth_1.userMiddleware, content_1.getContent);
content.post('/share', auth_1.userMiddleware, share_1.share);
content.get('/share/:sharelink', share_1.shareLink);
exports.default = content;
