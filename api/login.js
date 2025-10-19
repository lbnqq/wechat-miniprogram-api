export default function handler(req, res) {
  // 只允许POST请求
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed. Use POST.'
    });
  }

  try {
    const { code, userInfo } = req.body;

    // 验证必要参数
    if (!code || !userInfo) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters: code and userInfo'
      });
    }

    // 模拟用户登录处理
    const mockUserData = {
      userId: 1,
      openid: 'mock_openid_' + Date.now(),
      nickname: userInfo.nickName || 'Test User',
      avatarUrl: userInfo.avatarUrl || '',
      isNewUser: true,
      loginTime: new Date().toISOString()
    };

    // 返回成功响应
    res.status(200).json({
      success: true,
      message: 'Login successful (mock mode)',
      data: mockUserData
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
}