import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://root:root@cluster0.fmclb.mongodb.net/food-del")
    .then(() => console.log("DB connected"))
};
