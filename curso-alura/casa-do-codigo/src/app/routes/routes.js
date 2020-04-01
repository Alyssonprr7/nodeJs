module.exports = (app) =>{
    app.get('/', function(req, res){
        res.send(`
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1> CASA DO CÓDIGO</h1>
            </body>
            </html>
        `)
    });
    
    app.get('/livros', function(req, res){

        res.marko(
            require("../views/livros/listagem/listagem.marko"),
            {
                livros: [
                    { 
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    { 
                        id: 2,
                        titulo: 'Node Avançado'
                    }
                ]
            }
        );       
    });
}



