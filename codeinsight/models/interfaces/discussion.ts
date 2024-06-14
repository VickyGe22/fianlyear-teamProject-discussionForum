import { Document } from 'mongoose';

interface Reply {
  replystring: string;
  username: string;
  userimage: string;
}

interface Discussion extends Document {
  submitId: string;
  issuetitle: string;
  description: string;
  username: string;
  userimage?: string;
  replies: Reply[];
  totalReplies: number;
  createdAt: Date;
  creator: string;
}

export default Discussion;
