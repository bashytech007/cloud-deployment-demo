const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to get deployment info
app.get('/api/info', (req, res) => {
  res.json({
    message: 'Cloud Deployment Demo API',
    deploymentModel: req.hostname.includes('azurewebsites.net') ? 'PaaS (Azure App Service)' : 'IaaS (Azure Virtual Machine)',
    timestamp: new Date().toISOString(),
    platform: process.platform,
    nodeVersion: process.version
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});