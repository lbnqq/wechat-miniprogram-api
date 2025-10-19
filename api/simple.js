module.exports = async (req, res) => {
  try {
    res.status(200).json({
      message: 'Simple test working!',
      method: req.method,
      url: req.url,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: 'Something went wrong'
    });
  }
};