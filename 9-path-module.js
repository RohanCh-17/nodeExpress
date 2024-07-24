const path = require('path');

console.log(path.sep);

const filePath = path.join('content', 'test.txt')
console.log(filePath);

//only last portion of file 
const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'text.txt')
console.log(absolute);