import http from 'http';
const server = http.createServer((request ,response)=>{
  console.log(request.url);
  switch(request.url){
    case '/about':
        return response.end("<h1>About Page</h1>");
    case '/contact':
        return response.end("<h1>Contact Page</h1>");
    case '/':
        return response.end("<h1>Home Page</h1>");
    default:
        response.writeHead('404');
        return response.end("<h1> 404 Page not found </h1>");
    
  }


});

server.listen(2599,()=>{
    console.log("Server Running at Port 2599");

});

