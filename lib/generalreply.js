import mongoose, { Schema } from "mongoose";

const genereplySchema = new Schema({
  
  SubmitId: { 
      type: Schema.Types.ObjectId, 
      ref: 'Submit', 
      required: true 
  },

  replyText: { 
      type: String, 
      required: true 
  },

  creator: { 
      type: String, 
      required: true,
      default: 'Anonymous'
   },

  createdAt: { 
      type: Date, 
      default: Date.now 
  }

});

const GeneReply =
  mongoose.models.GeneReply || mongoose.model("GeneReply", genereplySchema);

export default GeneReply;


// versionKey: false // Set to false to disable the version key (__v)