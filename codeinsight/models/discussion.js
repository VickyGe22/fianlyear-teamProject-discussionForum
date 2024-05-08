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

    createdAt: { 
        type: Date, 
        default: Date.now 
    }

});

const Discussion =
  mongoose.models.Discussion || mongoose.model("Discussion", discussionSchema);

export default Discussion;


// versionKey: false // Set to false to disable the version key (__v)