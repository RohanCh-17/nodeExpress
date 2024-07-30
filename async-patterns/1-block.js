const http = require("http");
const server = http.createServer((req,res)=>{
if(req.url==="/"){
    res.end('homepage')
}
else if (req.url==='/about'){
    //blocking code
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            console.log(`${i} ${j}`);
        }
    }
    res.end('this is about page')
}else{
res.end('error page')}
})
server.listen(5000, ()=>{
    console.log('server is listening on port 5000:');
})