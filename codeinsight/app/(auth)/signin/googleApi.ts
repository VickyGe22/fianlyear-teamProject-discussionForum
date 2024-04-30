// googleApi.ts

// 设置你的 Google OAuth 2.0 客户端 ID
const CLIENT_ID = '916055987310-mtah7asr4ld8l0m91475h9aptnei2m1e.apps.googleusercontent.com';
// 设置你的重定向 URL
const REDIRECT_URI = 'http://localhost:3000';

// 生成 Google API 登录链接
export function generateGoogleLoginLink(): string {
  const scopes = encodeURIComponent('openid profile email');
  const loginUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes}`;
  return loginUrl;
}
