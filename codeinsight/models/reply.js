  import mongoose, { Schema } from "mongoose";

  const issuereplySchema = new Schema({
    
    discussionId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Discussion', 
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
  
  const IssueReply =
    mongoose.models.IssueReply || mongoose.model("IssueReply", issuereplySchema);
  
  export default IssueReply;
  
  
  // versionKey: false // Set to false to disable the version key (__v)