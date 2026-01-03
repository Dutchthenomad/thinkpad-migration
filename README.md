# ThinkPad Migration - GitHub Connectivity Test

A simple web application to test GitHub API connectivity for the ThinkPad Migration tool.

## Overview

This application provides a visual interface to verify that the system can successfully connect to GitHub's API, which is essential for performing migration operations.

## Features

- 🔗 Real-time GitHub API connectivity testing
- 🎨 Beautiful, responsive web interface
- ✅ Clear success/failure indicators
- 📊 Displays connection status and response details
- 🧘 Shows GitHub Zen quotes on successful connections

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Dutchthenomad/thinkpad-migration.git
cd thinkpad-migration
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Start the server:
```bash
npm start
```

2. Open your web browser and navigate to:
```
http://localhost:3000
```

3. Click the "Test GitHub Connection" button to verify connectivity

The application will automatically test the connection when the page loads.

## API Endpoints

### Test GitHub Connectivity
- **Endpoint:** `GET /api/test-github`
- **Description:** Tests connection to GitHub API
- **Response:** JSON object with connection status and details

### Health Check
- **Endpoint:** `GET /api/health`
- **Description:** Server health check
- **Response:** JSON object with server status

## How It Works

The application makes a request to GitHub's `/zen` API endpoint, which is a simple public endpoint that returns a random GitHub philosophy quote. This is a reliable way to test API connectivity without requiring authentication.

## Project Structure

```
thinkpad-migration/
├── server.js           # Express server with API endpoints
├── package.json        # Node.js dependencies and scripts
├── public/
│   └── index.html     # Web UI for connectivity testing
└── README.md          # This file
```

## Testing

The test automatically runs when you open the web interface. You can also manually trigger it by clicking the "Test GitHub Connection" button.

Expected successful response includes:
- ✅ Connection status
- HTTP status code (should be 200)
- A GitHub Zen quote
- Timestamp of the test

## Troubleshooting

If the connection test fails:

1. **Check your internet connection:** Ensure you have an active internet connection
2. **Firewall settings:** Make sure outbound HTTPS connections are allowed
3. **Proxy settings:** If behind a corporate proxy, you may need to configure Node.js to use it
4. **GitHub Status:** Check [GitHub Status](https://www.githubstatus.com/) to see if there are any ongoing issues

## License

MIT

## Author

Dutchthenomad
