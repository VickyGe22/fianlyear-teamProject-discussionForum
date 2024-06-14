import mongoose, { Schema } from "mongoose";

const submitSchema = new Schema({
  
  codesamples: {
    type: String,
    required: true,
    // minLength: [2, "Name must be larger than 2 characters"],
    // maxLength: [50, "Name must be lesser than 50 characters"],
  },

  staticAnalysis: {
    type: String,
    required: false,

  },

  complexityAnalysis: {
    type: String,
    required: false,

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
    // minLength: [2, "Name must be larger than 2 characters"],
    // maxLength: [10, "Name must be lesser than 50 characters"],
  },

  numberReply:{
    type: Number,
    required: false,
    default: 0
  },

  discussion: [{
    type: Schema.Types.ObjectId,
    ref: 'Discussion'
  }],

  generalreply: [{
    replystring: String,
    username: String,
    userimage: String
  }],

  creator: { 
    type: String, 
    required: true,
    default: 'Anonymous'
  },

  createdAt: { 
  type: Date, 
  default: Date.now 
},

  acceptance:{
    type: Boolean,
    required:false,
    default:false
  },

  discuss_close:{
    type: Boolean,
    default:false
}


});

const Submit =
  mongoose.models.Submit || mongoose.model("Submit", submitSchema);

export default Submit;