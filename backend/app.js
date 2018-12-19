const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept"
        );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, PUT, OPTIONS"
        );
    next();
})

app.post('/api/posts', (req, res, next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
});

app.get('/api/posts', (req, res, next) => {
    const posts = [
        { id: 'fdsf', title: 'post1', content: 'server response'},
        { id: 'fd345', title: 'post2', content: 'server response'},
        { id: '342hg', title: 'post3', content: 'server response'}
    ];

    res.status(200).json({
        message: 'POsts fetched succesfully',
        posts: posts
    });

   // res.json(posts);
    //next();
})

module.exports = app;