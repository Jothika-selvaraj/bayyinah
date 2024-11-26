import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://Jothika:joe123@cluster0.fx84x.mongodb.net/blog-app');
    console.log("DB Connected");
}