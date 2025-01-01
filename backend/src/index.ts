import express from 'express';
import mongoose from 'mongoose';
import authrouter from './routes/auth.routest';
import content from './routes/content.route';
import cors from 'cors'
import 'dotenv/config'
const db_url = process.env.DB_LINK || "mongodb://localhost:27017/brainly";
const app = express();
app.use(cors());
const port = process.env.PORT || 8888;
mongoose.connect(db_url)
app.use(express.json());
app.get('/', (req, res) => {
    res.send("hello ji kaise ho")
})

app.use("/auth", authrouter);
app.use("/content", content);
app.listen(port,()=>{
    console.log("listening on port "+port)
});