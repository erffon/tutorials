import mongoose from "mongoose";

export default connectMongoDB = () => {
  try {
    mongoose.connect(process.env.DB_MONGODB_URI);
    console.log("🚀 ~ connected to database", db);
  } catch (error) {
    console.log(error);
  }
};
