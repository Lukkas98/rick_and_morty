const axios = require("axios")

const getCharDetail = (res, id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.data)
    .then((data)=>{
        const character = {
            id: data.id,
            image: data.image,
            name: data.name,
            status: data.status,
            species: data.species,
            origin: data.origin,
            gender: data.gender
        }
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify(character))
    })
    .catch(err => {
        res.writeHead(500, {"Content-type": "text/plain"}).end(err.message)
    })
}

module.exports = {
    getCharDetail
}