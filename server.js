const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve GrapesJS assets from node_modules
app.use('/grapesjs', express.static(path.join(__dirname, 'node_modules/grapesjs/dist')));
app.use('/grapesjs', express.static(path.join(__dirname, 'node_modules/grapesjs-preset-newsletter/dist')));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Email Template Builder running at http://localhost:${PORT}`);
});
