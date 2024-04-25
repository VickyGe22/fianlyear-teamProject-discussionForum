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
    enum: ['Python', 'C', 'C++', 'C#', 'Java', 'JavaScript', 'Other'], // Predefined options plus 'Other'
    // default: 'Python' // Default value if none is provided
  },
  
  customLanguage: {
    type: String,
    default: '' // To store a custom language if 'Other' is chosen
  },
 
  levels: {
    type: String,
    required: true,
    enum: ['Bachelor-cs1', 'Bachelor-cs2', 'Master-cs1', 'PhD-cs1', 'Other'], // Predefined levels plus 'Other'
    default: 'Bachelor-cs1'
  },
  customLevel: {
    type: String,
    // default: '' // To store a custom level if 'Other' is chosen
  },
  
  types: {
    type: String,
    required: true,
    enum: ['Assignment', 'Project', 'Exam', 'Other'], // Predefined types plus 'Other'
    // default: 'Assignment'
  },
  customType: {
    type: String,
    // default: '' // To store a custom type if 'Other' is chosen
  },

  issuedescriptions: {
    type: String,
    required: true, // Since there's an asterisk indicating that Issue Description is required
    trim: true // To remove whitespace from both ends of the string
  },

  tags: [{
    type: String,
    trim: true, // Each tag is a trimmed string
    unique: true, //unique用于指定该字段在整个集合中必须是唯一的
  }],

});

const Submit =
  mongoose.models.Submit || mongoose.model("Submit", submitSchema);

export default Submit;