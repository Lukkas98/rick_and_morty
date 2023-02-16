const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;

        const resolve = await axios(`${URL}${id}`);

        const character = {
            id: resolve.data.id,
            image: resolve.data.image,
            name: resolve.data.name,
            gender: resolve.data.gender,
            species: resolve.data.species
        }; 
        
        res.status(200).json(character);
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getCharById;