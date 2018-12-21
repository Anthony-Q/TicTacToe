const express = require('express');
const bodyparser = require('body-parser');
const PORT = 7000;
const path = require('path');

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})