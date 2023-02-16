const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;

        const {data} = await axios(`${URL}${id}`);

        const character = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species
        }; 
        
        res.status(200).json(character);
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getCharById;