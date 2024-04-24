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
    required: false,
    enum: ['Python', 'C', 'C++', 'C#', 'Java', 'JavaScript', 'Other'], // Predefined options plus 'Other'
    default: 'Python' // Default value if none is provided
  },
  
  customLanguage: {
    type: String,
    required: false, 
    default: '' // To store a custom language if 'Other' is chosen
  },
 
  levels: {
    type: String,
    required: false,
    enum: ['Bachelor-cs1', 'Bachelor-cs2', 'Master-cs1', 'PhD-cs1', 'Other'], // Predefined levels plus 'Other'
    default: 'Bachelor-cs1'
  },
  customLevel: {
    type: String,
    required: false, 
    default: '' // To store a custom level if 'Other' is chosen
  },
  
  types: {
    type: String,
    required: false,
    enum: ['Assignment', 'Project', 'Exam', 'Other'], // Predefined types plus 'Other'
    default: 'Assignment'
  },
  customType: {
    type: String,
    required: false, 
    default: '' // To store a custom type if 'Other' is chosen
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