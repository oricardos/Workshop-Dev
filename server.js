//express para criar e configurar server
const express = require("express")
const server = express()

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudos",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente inventore molestiae ipsum",
        url: "https://rocketseat.com.br",
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente inventore molestiae ipsum",
        url: "https://rocketseat.com.br",
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729013.svg",
        title: "Cursos de Culinária",
        category: "Alimentação",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente inventore molestiae ipsum",
        url: "https://rocketseat.com.br",
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729040.svg",
        title: "DIY",
        category: "Diversos",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente inventore molestiae ipsum",
        url: "https://rocketseat.com.br",
    },
]

// configurar arquivos estáticos( css, scripts ...)
server.use(express.static("public"))

// configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, 
})


//criação de rota /
//e pego o pedido do cliente para responder
server.get("/", function(req, res){

    const reversedIdeas = [...ideas].reverse()

    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if (lastIdeas.length < 3){
            lastIdeas.push(idea)
        }       
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideas", function(req, res){
    
    const reversedIdeas = [...ideas].reverse()

    return res.render("ideas.html", {ideas: reversedIdeas})
})

//server ligado na porta 3000
server.listen(3000)