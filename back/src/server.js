const router = require("./routes/index");
let favorites = require("./utils/favs");
const cors = require('cors');

const express = require("express");
const server = express();
const PORT = 3001;

server.use(express.json());
server.use(cors())

server.use("/", router);

server.post("/rickandmorty/fav", (req, res)=>{
    const { id, name, gender, species, image } = req.body;
    let character = {
        id,
        image,
        name,
        gender,
        species
    }
    favorites.push(character);
    res.status(200);
});

server.get("/rickandmorty/fav", (req, res)=>{
    res.status(200).json(favorites);
});

server.delete("/rickandmorty/fav/:id", (req, res)=>{
    const {id} = req.params;
    
    let newFavorites = favorites.filter( character => character.id !== Number(id));
    favorites = newFavorites;

    res.status(200);
});



server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
 });