"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_routest_1 = __importDefault(require("./routes/auth.routest"));
const content_route_1 = __importDefault(require("./routes/content.route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 8888;
mongoose_1.default.connect("mongodb+srv://vineetchelani:vineetttt@vineet.3wknhd0.mongodb.net/secondbrain");
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("hello ji kaise ho");
});
app.use("/auth", auth_routest_1.default);
app.use("/content", content_route_1.default);
app.listen(port, () => {
    console.log("listening on port " + port);
});
