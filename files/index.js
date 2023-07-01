const fs = require('fs');
const path = require('path');

// could also write above code as
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'))

fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// will output first bc asynchronous
console.log('Hello!')

// writes (creates file if needed)
fs.writeFile(path.join(__dirname, 'reply.txt'), 'Hi there!', (err) => {
    if (err) throw err;
    console.log("Yay!");

    fs.appendFile(path.join(__dirname, 'reply.txt'), 'Hi, friend!', (err) => {
        if (err) throw err;
        console.log("Yay for appending!");
    });

        fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'newReply.txt'), (err) => {
            if (err) throw err;
            console.log("Yay for renaming!");
        });
});

// updates (will also create file if doesn't exist)
fs.appendFile(path.join(__dirname, 'test.txt'), 'Testing...', (err) => {
    if (err) throw err;
    console.log("Yay for appending!");
});

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
});