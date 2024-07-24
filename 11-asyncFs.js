const { readFile, writeFile } = require('fs')
console.log('start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
        }
        const second = result;
        writeFile('./content/asyncResult.txt', `here is the result: ${first} ${second} `, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('file written successfully');
        })
    })
})
console.log('starting next task ');