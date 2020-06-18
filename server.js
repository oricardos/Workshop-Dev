//express para criar e configurar server
const express = require("express")
const server = express()

// configurar arquivos estáticos( css, scripts ...)
server.use(express.static("public"))


//criação de rota /
//e pego o pedido do cliente para responder
server.get("/", function(req, res){
    return res.sendFile(__dirname + "/index.html")
})


//server ligado na porta 3000
server.listen(3000)