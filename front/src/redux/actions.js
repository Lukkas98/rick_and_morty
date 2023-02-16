import { ADD_CHARACTER, FILTER, ORDER, REMOVE_CHARACTER } from "./type";
import axios from "axios";


export async function addCharacter(character){
    
    await axios.post("http://localhost:3001/rickandmorty/fav", character);

    return{
        type: ADD_CHARACTER,
        payload: character
    }
    
}
/* export const addCharacter = (character) => async () => {
    await axios.post("http://localhost:3001/rickandmorty/fav", character);
    return{
      type: ADD_CHARACTER,
      payload: character
    }
  }; */

export function removeCharacter(id){
    axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    return{
        type: REMOVE_CHARACTER,
        payload: id
    }
}

export function filterCards(status){
    return{
        type: FILTER,
        payload: status
    };
};

export function orderCards(id){
    return{
        type: ORDER,
        payload: id
    };
};