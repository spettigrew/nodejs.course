//  Emits an event from event listener

const http = require('http');
const path = require('path');
const fs = require('fs');
const { stringify } = require('querystring');
const { publicDecrypt } = require('crypto');

// create a new server object
const server = http.createServer((req, res) => {
//     // console.log((req.url))
//     if (req.url === '/') {
//         fs.readFile(
//             path.join(__dirname, 'public', 'index.html'), 
//             (err, content) => {
//                 if (err) throw err;
//             // add a content type
//             res.writeHead(200, { 'Content-Type': 'text/html' })
//             res.end(content);
           
//         }
//       )
//     }
// })

// // request an api using just node; not very efficient
// if (req.url === '/api/users') {
//     const user = [
//         {name: 'Bob', age: 40},
//         {name: 'John', age: 30}
//     ]
//     res.writeHead(200, { 'Content-Type': 'app/json' })
//     res.end(stringify(users));
// }

let filePath = path.join(__dirname, 
    'public', 
    req.url == '/' ? 'index.html' : req.url);

    //  Extension of file
    let extName = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check extension and set content type
    switch(extName) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found 
                fs.readFile(path.join
                    (__dirname, 'public', '404.html'), (err, content) => {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.end(content, 'utf8');
                    })
            } else {
                // Server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
            } else {
                // Success 
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf8');
            }
    })

    // console.log(filePath);
    // res.end()
})
// set up an environment variable, then on localhost
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))


// const Person = require('./person')

// const person = require('./person')

// console.log(person.name)

// const person1 = new Person("Jane Doe", 30);

// person1.greeting();