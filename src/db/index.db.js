import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`Connected to ${connectionInstance.connection.host}`);
    // console.log(connectionInstance); //comment this
  } catch (error) {
    console.error("Failed to connect", error);
    process.exit(1);
  }
};

export default connectDB;
