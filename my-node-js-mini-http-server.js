"use strict";

// Use (in Windows use cmd!):
// curl http://localhost:3000/get
// curl -X POST -H "content-type: application/json" -d "{\"message\":\"11111\"}"  http://localhost:3000/post

const bodyParser = require('body-parser');
const express = require('express');

console.log("05.js Start");

const app = express();
app.use(bodyParser.json());


app.get('/get', (req, res) => {
    const { message: value } = { message: "Hello :-)" };
    console.log("get:");
    console.log({ value });

    // send
    res.json({ message: value });
});

app.post('/post', (req, res) => {
    const { message: value } = req.body;
    console.log("post:");
    console.log({ value });

    // resend json data
    res.json({ message: value });
});

app.listen(3000, () => {
    console.log("listen at port 3000");
});

console.log("05.js End.");