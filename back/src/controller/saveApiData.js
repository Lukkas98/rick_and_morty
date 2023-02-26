const axios = require("axios");
const {character} = require("../models/Character")

const getApiData = async ()=>{
    try {
      const charactersPromise = [];
      for (let i = 1; i <= 5; i++) {
        const apiData = await axios(`https://rickandmortyapi.com/api/character/?page=${i}`);
         
        charactersPromise.push(apiData);
      }
      charactersPromise = (await Promise.all(charactersPromise)).map( res => res.data.result.map(char => {
        return {
          id: char.id,
          name: char.name,
          species: char.species,
          status: char.status,
          origin: char.origin,
          gender: char.gender,
          image: char.image
        }
      }))

      let characterAll = [];
      charactersPromise.map(char => characterAll.concat(char));

      return characterAll;

      } catch {
        return { "error": "Ha ocurrido un error al obtener los personajes." }
      }

    // return characters;
}

const saveApiData = async ()=>{
    const characters = await getApiData()

    for (const char of characters) {
        const [result, created] = await characters.findOrCreate({
            where: { name: char.name },
            defaults: char
        })
        console.log(created ? 'Personaje creado:' : 'Personaje encontrado:', result.toJSON());
    }
}


module.exports = saveApiData;