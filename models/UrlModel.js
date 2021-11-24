const knex = require('../database')


class Url {

    async inserir (url, codigo) {
        try {
            await knex.insert({codigo: codigo, url: url}).table("links")

            var resultado = await knex.select().table("links").where({codigo: codigo, url: url})            
                return resultado[0]

        } catch (err) {
            console.log(err)
        }
    }

    async procurar (codigo) {
        try {
            var resultado = await knex.select().table("links").where({codigo: codigo})

            if(resultado.length > 0) {            
                return resultado[0]
            } else {
                return undefined
            }

        }
        catch (err) {
            console.log(err)
            return undefined
        }


    }
}

module.exports = new Url ()