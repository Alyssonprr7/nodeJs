const fs= require("fs");


var promise1 = new Promise(function(resolve,reject){
    fs.readFile("./names.txt", "utf8", function(err,data){
        if(err){
            reject("Deu ruim");
        }
        resolve(data);
    });
});

var promise2 = new Promise(function(resolve,reject){
    fs.readFile("./names2.txt", "utf8", function(err,data){
        if(err){
            reject("Deu ruim");
        }
        resolve(data);
    });
});

promise1
.then(function(file){
    console.log(file);
}).catch (function(err){
    console.log(err);
});

promise2
.then(function(file){
    console.log(file);
}).catch(function(err){
    console.log(err);
});
