require("marko/node-require");
require("marko/express");


const express = require("express");
const app =express() //O express retorna uma funcao


const routes = require("../app/routes/routes");
routes(app); 

module.exports = app; 