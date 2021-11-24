const UrlModel = require("../models/UrlModel")
const dotenv = require("dotenv");
dotenv.config();
const dominio = process.env.DOMAIN


function gerarcodigo() {
    let textoVazio = ''
    const possibilidades = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    for(let i=0; i < 5; i++){
        textoVazio += possibilidades.charAt(Math.floor(Math.random() * possibilidades.length))
    }
    return textoVazio
}


class UrlController {

    async index (req, res) {
        res.render('index')

    }
    async redirecionar (req, res) {
        var codigo = req.params.codigo

        var resultado = await UrlModel.procurar(codigo)

        if(resultado == undefined) {
            return res.status(404)
    }
   res.redirect(resultado.url)

}
    async criar (req, res) {

    var url = req.body.url    
    var codigo = gerarcodigo()      
    var resultado = await UrlModel.inserir(url, codigo)  
    
    
    res.render('link', {dominio, resultado})
    

    }
}

module.exports = new UrlController ()