// create web server
const http = require('http');
// create file system
const fs = require('fs');
// create url
const url = require('url');
// create query string
const querystring = require('querystring');
// create comments array
let comments = [];
// create server
const server = http.createServer((req, res) => {
    // parse url
    let parsedUrl = url.parse(req.url);
    // parse query string
    let parsedQuery = querystring.parse(parsedUrl.query);
    // parse path
    let path = parsedUrl.pathname;
    // check path
    if (path === '/add_comment') {
        // get comment
        let comment = parsedQuery.comment;
        // add comment to comments array
        comments.push(comment);
        // write comments array to comments.txt
        fs.writeFileSync('comments.txt', JSON.stringify(comments));
        // response with comment added
        res.end('comment added');
    } else if (path === '/get_comments') {
        // response with comments array
        res.end(JSON.stringify(comments));
    } else {
        // read comments.txt
        comments = JSON.parse(fs.readFileSync('comments.txt'));
        // response with comments array
        res.end(JSON.stringify(comments));
    }
});
// listen on port 3000
server.listen(3000, () => {
    console.log('server started');
});
    