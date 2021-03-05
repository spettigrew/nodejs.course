// Gets a server running 

const http = require('http');
http.createServer((req, res) => {
    // Send a request and get a response
    res.write("Hello World");
    res.end()

})
.listen(5000, () => console.log("Server running..."));