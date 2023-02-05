import { ADD_CHARACTER, FILTER, ORDER, REMOVE_CHARACTER } from "./type";


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

export function filterCards(status){
    return{
        type: FILTER,
        payload: status
    }
}

export function orderCards(id){
    return{
        type: ORDER,
        payload: id
    }
}