const {createReadStream}= require('fs')

const stream = createReadStream('./content/bigtext.txt',{highWaterMark :90000});

// size of buffer is 64kb by default 
// last buffer -remainder
// highWaterMark - control size
// const stream = createReadStream ('./content/bigtext.txt',{highWaterMark :90000})
//// const stream = createReadStream ('./content/bigtext.txt', {encoding : 'utf-8'})

stream.on('data', (result)=>{
console.log(result);
})

stream.on('error', (err)=>{
    console.log(err)
})