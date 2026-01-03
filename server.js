const express = require('express');
const https = require('https');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// API endpoint to test GitHub connectivity
app.get('/api/test-github', (req, res) => {
  const options = {
    hostname: 'api.github.com',
    path: '/zen',
    method: 'GET',
    headers: {
      'User-Agent': 'ThinkPad-Migration-App'
    }
  };

  const request = https.request(options, (response) => {
    let data = '';

    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      res.json({
        success: true,
        status: response.statusCode,
        message: 'GitHub API is reachable',
        zen: data,
        timestamp: new Date().toISOString()
      });
    });
  });

  request.on('error', (error) => {
    res.status(500).json({
      success: false,
      message: 'Failed to connect to GitHub API',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  });

  request.end();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} to view the UI`);
});
