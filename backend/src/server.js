import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import {connectDB} from"./config/db.js";
const app = express();

connectDB();

app.use("/api/notes", noteRoutes);

app.listen(5001, () =>{
    console.log(" Server started on PORT: 5001");
});

//mongodb+srv://ducminh2003tp:nNFJ2kRtK9i6wCBm@cluster0.ezbortw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0