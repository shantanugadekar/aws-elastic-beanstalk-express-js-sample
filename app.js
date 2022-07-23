const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is Test file for AWS CD Pipeline.Also Review stage added for manual request'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
