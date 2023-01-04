import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import BalanceRoute from "./routes/BalanceRoute.js";
import ExpenseRoute from "./routes/ExpenseRoute.js";

dotenv.config();
const app = express();
const port = 3100;
mongoose.connect('mongodb://localhost:27017/my_wallet',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'));

app.use(cors( { credentials:true, origin:'http://localhost:3000' } ));
app.use(cookieParser());
app.use(express.json());
app.use(BalanceRoute);
app.use(ExpenseRoute);

app.listen(port, () => {
    console.log(`My Wallet berjalan di port ${port}`)
});