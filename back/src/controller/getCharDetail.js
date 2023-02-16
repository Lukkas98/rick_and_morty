const axios = require("axios")
const url = "https://rickandmortyapi.com/api/character/";


const getCharDetail = async (req, res)=>{
    try {
        const {id} = req.params;

        const resolve = await axios(`${url}${id}`);
        
        const character = {
            id: resolve.data.id,
            image: resolve.data.image,
            name: resolve.data.name,
            status: resolve.data.status,
            species: resolve.data.species,
            origin: resolve.data.origin,
            gender: resolve.data.gender
        }
            
        res.status(200).json(character);
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getCharDetail;