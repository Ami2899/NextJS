import mongoose from "mongoose";

let isConnected: boolean = false;

const connect = async () => {
  if (isConnected) {
    return;
  }

  try {
    if (!process.env.MONGO) {
      throw new Error("MongoDB connection string not found");
    }

    await mongoose.connect(process.env.MONGO);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

export default connect;
