import { Router } from "express";

import { createContent, deleteContent, getContent } from "../controller/content";
import { userMiddleware } from "../middleware/auth";
import { share, shareLink } from "../controller/share";

const content = Router();

// Route for creating content
content.post("/createContent", userMiddleware, createContent);

// Route for deleting content by ID
content.delete("/deleteContent", userMiddleware, deleteContent);

// Route for getting content (all or filtered)
content.get("/getContent", userMiddleware, getContent);

content.post('/share',userMiddleware,share)
content.get('/share/:sharelink',shareLink)

export default content;
