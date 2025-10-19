# WeChat Mini Program API

WeChat Mini Program Backend API deployed on Vercel.

## 🚀 API Endpoints

### Base URL
```
https://your-domain.vercel.app
```

### Available Endpoints

#### 1. Root Endpoint
```
GET /
```

#### 2. Hello Endpoint
```
GET /hello
```

#### 3. Health Check
```
GET /health
```

#### 4. Login Endpoint
```
POST /login
Content-Type: application/json

{
  "code": "test-code-123",
  "userInfo": {
    "nickName": "用户昵称",
    "avatarUrl": "https://example.com/avatar.jpg"
  }
}
```

## 📱 Usage in WeChat Mini Program

```javascript
// config.js
const config = {
  apiBaseUrl: 'https://your-domain.vercel.app'
}

// wechat-auth.js
const response = await wx.request({
  url: `${config.apiBaseUrl}/login`,
  method: 'POST',
  data: {
    code: loginCode,
    userInfo: userProfile
  }
});
```

## 🔧 Environment Variables

Configure in Vercel Dashboard:
- `WECHAT_APP_ID`: Your WeChat Mini Program App ID
- `WECHAT_APP_SECRET`: Your WeChat App Secret
- `NODE_ENV`: production

## 📄 License

MIT