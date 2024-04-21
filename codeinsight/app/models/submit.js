//这里是为了建造一个模型，为了满足数据的提交要求
//例如将fullname设置最小长度为2，最大长度为50，email必须符合邮箱格式，message必须存在，date默认为当前时间

import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Name is required."],
    trim: true,  //修剪空格
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  message: {
    type: String,
    required: [true, "Message is required."],        //必须存在
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;