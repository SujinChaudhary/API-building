import http from 'http';
const server = http.createServer((request ,response)=>{
   response.writeHead(200,{
    "content-type" : "application/json",
   });
    response.end(JSON.stringify({status: 'ok'}));

});

server.listen(2599,()=>{
    console.log("Server Running at Port 2599");

});

