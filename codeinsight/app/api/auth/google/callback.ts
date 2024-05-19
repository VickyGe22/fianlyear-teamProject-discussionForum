import { NextApiRequest, NextApiResponse } from 'next';
import { getTokens, getUserInfo } from '../../../../libs/googleApi';
import connectDB from '@/libs/mongodb';
import User from '@/models/user';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(400).json({ error: 'Authorization code is required' });
    }

    const tokens = await getTokens(code as string);
    const userInfo = await getUserInfo(tokens.access_token, tokens.id_token);

    await connectDB();

    let user = await User.findOne({ email: userInfo.email });

    if (!user) {
      user = new User({
        email: userInfo.email,
        username: userInfo.name,
        googleId: userInfo.sub,
      });

      await user.save();
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=86400; SameSite=Strict`);

    res.writeHead(302, { Location: '/' });
    res.end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
