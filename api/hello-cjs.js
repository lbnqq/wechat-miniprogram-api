module.exports = async (req, res) => {
  res.status(200).json({
    message: 'Hello from CommonJS!',
    timestamp: new Date().toISOString(),
    method: req.method,
    url: req.url
  });
};