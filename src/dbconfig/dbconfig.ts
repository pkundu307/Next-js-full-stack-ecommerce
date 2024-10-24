import mongoose from "mongoose";

// Connect to MongoDB
export async function connect() {
  try {
    const uri = process.env.mongoUrl;
    mongoose.connect(uri!);
    const connection = await mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to MongoDB successfully");
    });
  } catch (error) {
    console.log("wrong",error);
  }
}
