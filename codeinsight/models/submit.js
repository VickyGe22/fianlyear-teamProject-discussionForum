//这里是为了建造一个模型，为了满足数据的提交要求

import mongoose, { Schema } from "mongoose";

const submitSchema = new Schema({
  
  codesamples: {
    type: String,
    required: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },

  languages: {
    type: String,
    required: true,
    default: 'Python' // Default value if none is provided
  },

  
  levels: {
    type: String,
    required: true,
    default: 'Bachelor-cs1'
  },

  
  types: {
    type: String,
    required: true,
    default: 'Assignment'
  },

  issuedescriptions: {
    type: String,
    required: false, // Since there's an asterisk indicating that Issue Description is required
    trim: true, // To remove whitespace from both ends of the string
    default: ''
  },

  tags: [{
    type: String,
    required: false, 
    trim: true
  }],

});

const Submit =
  mongoose.models.Submit || mongoose.model("Submit", submitSchema);

export default Submit;


// versionKey: false // Set to false to disable the version key (__v)