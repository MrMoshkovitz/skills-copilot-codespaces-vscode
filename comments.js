// Create web server

// import
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const { Console } = require('console');

// set up
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up data
let comments = [];
let commentsPath = path.join(__dirname, 'data', 'comments.json');

// read data
fs.readFile(commentsPath, (err, data) => {
    if (err) throw err;
    comments = JSON.parse(data);
});

// write data
function saveComments() {
    fs.writeFile(commentsPath, JSON.stringify(comments), (err) => {
        if (err) throw err;
    });
}

// get comments
app.get('/api/comments', (req, res) => {
    res.send(comments);
});

// post comments
app.post('/api/comments', (req, res) => {
    let comment = {
        id: comments.length + 1,