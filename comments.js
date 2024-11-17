// create web server
const express = require('express');
const app = express();

// add body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// add comments route
const comments = require('./routes/comments');
app.use('/comments', comments);

// start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
    