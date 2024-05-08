//这里是为了建造一个模型，为了满足数据的提交要求

import mongoose, { Schema } from "mongoose";

const submitSchema = new Schema({
  
  codesamples: {
    type: String,
    required: true,
    // minLength: [2, "Name must be larger than 2 characters"],
    // maxLength: [50, "Name must be lesser than 50 characters"],
  },

  languages: {
    type: String,
    required: [true, "Please specify the programming language of the code."],
    // default: 'Python' // Default value if none is provided
  },

  
  levels: {
    type: String,
    required: [true, "Please specify the proficiency level of students."],
  },
  
  types: {
    type: String,
    required: [true, "Please indicate the origin of the code by selecting a type."],
  },

  issuedescriptions: {
    type: String,
    required: [true, "Please describe the main issue in your upload code."],
    trim: true, // To remove whitespace from both ends of the string
  },

  tags: [{
    type: String,
    required: false, 
    trim: true
  }],

  // Algorithm
  
  sampletitles:{
    type: String,
    required: false,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [10, "Name must be lesser than 50 characters"],
  },

  numberReply:{
    type: Number,
    required: false,
    default: 0
  },

  forum: { 
    type: Schema.Types.ObjectId, 
    ref: 'Discussion' 
  },

  generalreply: { 
    type: Schema.Types.ObjectId, 
    ref: 'GeneReply' 
  }

});

const Submit =
  mongoose.models.Submit || mongoose.model("Submit", submitSchema);

export default Submit;


// versionKey: false // Set to false to disable the version key (__v)