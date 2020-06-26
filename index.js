const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require ("path");
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"public/index.html"));
    });
    app.listen(port);