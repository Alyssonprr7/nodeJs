const http = require('http');
const fs= require("fs");

var html = new Promise(function(resolve,reject){
    fs.readFile("./assets/index.html", "utf8", function(err,data){
        if(err){
            reject("Deu ruim");
        }
        resolve(data);
    });
});

const port = 3000;

const server = http.createServer((req, res) => {
  const path = req.url;
  console.log(path)

  if (path == "/json"){
    res.statusCode = 200;
    res.setHeader('Content-Type', "application/json");
    res.end(JSON.stringify({data:"30/03"}))

  }else if (path=="/html"){
    res.statusCode = 200;
    res.setHeader('Content-Type', "text/html");
    fs.readFile("./assets/index.html", "utf8", function(err,data){
        res.end(data);
    });
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', "text/plain", "utf-8");
    res.end("Ola Mundo")
  }
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});