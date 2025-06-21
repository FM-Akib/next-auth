import mongoose from "mongoose";

export async function dbConnect() {
  if (process.env.MONGO_DB_CONNECTION_STRING) {
    try {
    
     const connection = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING), )
        console.log("MongoDB connected successfully:", connection.connection.host);
        return connection;
    } catch (error) {
      console.error("MongoDB connection error:", error);
      throw new Error("Failed to connect to MongoDB");
    }
  } else {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }
}