const http = require ('http')
const fs = require ('fs')

http.createServer((req,res)=>{
    // const text =fs.readFileSync('./content/bigtext.txt','utf-8')
    // res.end(text)

    const fileStream = fs.createReadStream('./content/bigtext.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)
        //helps reading and writing the data in chunks 
    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })
})
.listen (5000);