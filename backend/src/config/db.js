import mongoose from "mongoose";

export const connectDB = async() =>{
    try {
        await mongoose.connect("mongodb+srv://ducminh2003tp:nNFJ2kRtK9i6wCBm@cluster0.ezbortw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log(" MONGODB CONNECTED SUCCESSFULLY!");
    }catch (error) {
        console.error("Error connecting to MONGODB",error);
        process.exit(1)
    }
}