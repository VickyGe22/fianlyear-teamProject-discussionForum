import axios from "axios";

// 设置你的 Google OAuth 2.0 客户端 ID
const CLIENT_ID = '806875294866-b4tvj67d9nhgo60pdogvbbnha8m5392h.apps.googleusercontent.com';
// 设置你的重定向 URL
const REDIRECT_URI = 'http://localhost:3000/api/auth/google/callback';

// 生成 Google API 登录链接
export function generateGoogleLoginLink(): string {
  const scopes = encodeURIComponent('openid profile email');
  const loginUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes}`;
  return loginUrl;
}

// 获取访问令牌
export async function getTokens(code: string): Promise<any> {
  const url = 'https://oauth2.googleapis.com/token';
  const values = {
    code,
    client_id: CLIENT_ID,
    client_secret: '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',
    redirect_uri: REDIRECT_URI,
    grant_type: 'authorization_code',
  };

  const response = await axios.post(url, values, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
}

// 获取用户信息
export async function getUserInfo(accessToken: string, idToken: string): Promise<any> {
  const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}


