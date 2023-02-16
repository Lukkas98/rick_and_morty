const axios = require("axios")
const url = "https://rickandmortyapi.com/api/character/";


const getCharDetail = async (req, res)=>{
    try {
        const {id} = req.params;

        const {data} = await axios(`${url}${id}`);
        
        const character = {
            id: data.id,
            image: data.image,
            name: data.name,
            status: data.status,
            species: data.species,
            origin: data.origin,
            gender: data.gender
        }
            
        res.status(200).json(character);
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getCharDetail;