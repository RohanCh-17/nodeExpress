// const { writeFileSync } = require('fs');
// const path = './content/bigText.txt';

// try {
//   for (let i = 0; i < 10000; i++) {
//     writeFileSync(path, `hello world ${i} \n`, { flag: 'a' });
//   }
//   console.log('File writing completed successfully.');
// } catch (error) {
//   console.error('Error writing file:', error);
// }

//OR 
const { writeFileSync } = require('fs');
for(let i = 0; i<10000; i++){
    writeFileSync('./content/bigtext.txt',`the big text is: ${i}`, {flag: 'a'})
}