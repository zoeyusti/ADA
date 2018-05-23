var http = require('http');
var puerto = 8080;

var fs = require('fs');

http.createServer(function (req, res) {

    //res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('perfil.html',function(err,data){
        //Escribo el contenido del archivo en la respuesta
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
/*
    console.log(req.url);

    if(req.url == "/random"){

    	res.write(miModulo.random());
    
    }
    else{
    	res.write(miModulo.saludo());
    }
	
    res.end();*/

}).listen(puerto, function () {

  console.log( "Escuchando en el puerto " + puerto );

});