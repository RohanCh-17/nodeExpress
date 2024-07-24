const http = require('http');
// req object represents the request/ method coming from web browser
// res represents the response that we are sending
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to homepage')
    }
    if (req.url === '/about') {
        res.end('Welcome to about page')
    }
    res.end(`<h1> oops! </h1>
        <p> we cant find the page you are looking for <p>  
        <a href= "/"> back home <a> `
    )

})
server.listen(5000)