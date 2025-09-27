import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Aakash:22335566@cluster0.nqd8q7t.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}