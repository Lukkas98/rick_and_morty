import { ADD_CHARACTER, REMOVE_CHARACTER } from "./type";


export function addCharacter(character){
    return{
        type: ADD_CHARACTER,
        payload: character
    }
}

export function removeCharacter(id){
    return{
        type: REMOVE_CHARACTER,
        payload: id
    }
}