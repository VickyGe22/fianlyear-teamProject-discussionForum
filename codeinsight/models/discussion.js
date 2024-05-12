import mongoose, { Schema } from "mongoose";

const discussionSchema = new Schema({
  
    submitId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Submit', 
        required: true 
    },

    issuetitle: { 
        type: String, 
        required: true 
    },

    description: { 
        type: String, 
        required: true 
    },

    creator: { 
        type: String, 
        required: true,
        default: 'Anonymous'
    },

    replies: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Reply' 
    }],

    totalReplies: { 
        type: Number, 
        default: 0 
    },

    createdAt: { 
        type: Date, 
        default: Date.now 
    }

});

const Discussion =
  mongoose.models.Discussion || mongoose.model("Discussion", discussionSchema);

export default Discussion;


