import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";

dotenv.config();    


const app = express();

app.get("/", (req, res) => {
    res.send("working sir");
}); 


const PORT =process.env.PORT;  
app.listen(PORT, () => {
    console.log(`✅Server is running on  http://localhost:${PORT}`);
    connectDB();
    }); 
