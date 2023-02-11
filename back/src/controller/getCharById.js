const axios = require("axios")

const getCharById = (res, id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.data)
    .then((data)=>{
        const character = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species
        }
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify(character))
    })
    .catch((err) => {
        res.writeHead(500, {"Content-type": "text/plain"})
        res.end(err.message)
    })
}



module.exports = {
    getCharById
}