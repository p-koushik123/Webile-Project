// import mongoose from "mongoose";

// const connectMongoDB = async () => {
// 	try {
// 		const conn = await mongoose.connect(process.env.MONGO_URI);
// 		console.log(`MongoDB connected: ${conn.connection.host}`);
// 	} catch (error) {
// 		console.error(`Error connection to mongoDB: ${error.message}`);
// 		process.exit(1);
// 	}
// };

// export default connectMongoDB;

import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const mongoURI = process.env.MONGO_URI; // Get MongoDB URI from .env file

if (!mongoURI) {
    console.error("MongoDB URI is missing. Check your .env file.");
    process.exit(1);
}

const connectMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Connected to MongoDB successfully!");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

export default connectMongoDB;
