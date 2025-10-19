const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());

// API路由
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'WeChat Mini Program API - Hosted on GitHub',
    version: '1.0.0',
    endpoints: {
      hello: '/hello',
      health: '/health',
      login: '/login (POST)'
    },
    timestamp: new Date().toISOString()
  });
});

app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello from GitHub-hosted API!',
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running on GitHub',
    timestamp: new Date().toISOString(),
    uptime: process.uptime() ? Math.floor(process.uptime()) : 0
  });
});

app.post('/login', (req, res) => {
  try {
    const { code, userInfo } = req.body;

    if (!code || !userInfo) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters: code and userInfo'
      });
    }

    // 模拟登录成功
    res.status(200).json({
      success: true,
      message: 'Login successful (GitHub-hosted mock)',
      data: {
        userId: 1,
        openid: 'mock_openid_' + Date.now(),
        nickname: userInfo.nickName || 'Test User',
        avatarUrl: userInfo.avatarUrl || '',
        isNewUser: true,
        loginTime: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// 404处理
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    availableEndpoints: ['/hello', '/health', '/login']
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;