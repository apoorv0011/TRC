import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });

        console.log("✅ MongoDB Connected Successfully");
        console.log(`📍 Database: ${connection.connection.name}`);

        // Handle connection errors after initial connection
        mongoose.connection.on("error", (err) => {
            console.error("❌ MongoDB connection error:", err.message);
        });

        mongoose.connection.on("disconnected", () => {
            console.warn("⚠️ MongoDB disconnected");
        });

    } catch (error) {
        console.error("❌ Failed to connect to MongoDB");
        console.error("Error:", error.message);
        
        // Don't exit immediately, allow retry
        console.log("⏳ Retrying connection in 5 seconds...");
        setTimeout(connectDB, 5000);
    }
};

export default connectDB;
