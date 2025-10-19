export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: 'WeChat Mini Program API',
    version: '1.0.0',
    endpoints: {
      hello: '/hello',
      health: '/health',
      login: '/login (POST)'
    },
    timestamp: new Date().toISOString()
  });
}