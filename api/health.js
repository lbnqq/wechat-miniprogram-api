export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime() ? Math.floor(process.uptime()) : 0
  });
}