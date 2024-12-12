import express from 'express';
import mongoose from 'mongoose';
import authrouter from './routes/auth.routest';
import content from './routes/content.route';

const app = express();
const port = 8888;
mongoose.connect("mongodb+srv://vineetchelani:vineetttt@vineet.3wknhd0.mongodb.net/secondbrain")
app.use(express.json());
app.get('/', (req, res) => {
    res.send("hello ji kaise ho")
})

app.use("/auth", authrouter);
app.use("/content", content);
app.listen(port,()=>{
    console.log("listening on port "+port)
});