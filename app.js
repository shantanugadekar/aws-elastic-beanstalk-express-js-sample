const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.get('/', (req, res) => res.sendFile('index.html', { root: path.join(__dirname, './AWSindex.html') } ));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
