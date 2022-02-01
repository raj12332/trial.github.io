const http=require('http')
const fs=require('fs')
const fileContent=fs.readFileSync('index.html');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);
})
server.listen(80,'127.0.0.1',()=>{
    console.log("jfd");
})
// write 127.0.0.1 on google, there is no need of writing 80 
// when you write 8000 instead of 80 then search on google by writing 127.0.0.1:8000
