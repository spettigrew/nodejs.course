// fs = File System - node fs_demo

const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...')
// });

//  Create and write to file 
fs.writeFile (path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
    if (err) throw err;
    console.log('File written to...')

    // Append a file 
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I heart Node.js!', err => {
        if (err) throw err;
        console.log('File written to...')
    });
});

// Read file 
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// });

// Rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test',), (err, data) => {
    if (err) throw err;
    console.log('File renamed...')
});