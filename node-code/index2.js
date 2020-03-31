const fs= require("fs");


var promise1 = new Promise(function(resolve,reject){
    setTimeout(() => {
        fs.readFile("./names.txt", "utf8", function(err,data){
            if(err){
                reject("Deu ruim");
            }
            resolve(data);
        });        
      }, 2000);

});

var promise2 = new Promise(function(resolve,reject){
    fs.readFile("./names2.txt", "utf8", function(err,data){
        if(err){
            reject("Deu ruim");
        }
        resolve(data);
    });
});


Promise.all([promise1, promise2])
.then(function(values){
    console.log(values[0],values[1]);
}).catch(function(err){
    console.log(err);
})