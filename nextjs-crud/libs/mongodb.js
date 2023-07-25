import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGODB_URI);
    console.log("🔥 connected to DB");
  } catch (error) {
    console.log(error);
  }
};
export default connectMongoDB;
