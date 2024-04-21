import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {    //没建立链接的时候等待
      await mongoose.connect(process.env.MONGODB_URI);  //URI是lancy的数据库地址
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;