const Router = require("express");
const getCharById = require("../controller/getCharById");
const getCharDetail = require("../controller/getCharDetail")
let favorites = require("../utils/favs");

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

router.post("/fav", (req, res)=>{
    const { id, name, gender, species, image } = req.body;
    let character = {
        id,
        image,
        name,
        gender,
        species
    }
    favorites.push(character);
    res.status(200).json(character);
});

router.get("/fav", (req, res)=>{
    res.status(200).json(favorites);
});

router.delete("/fav/:id", (req, res)=>{
    const {id} = req.params;
    
    let character = favorites.find(character => character.id === Number(id))

    let newFavorites = favorites.filter( character => character.id !== Number(id));
    favorites = newFavorites;

    res.status(200).json(character);
});

module.exports = router;
