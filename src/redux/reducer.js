import { ADD_CHARACTER, REMOVE_CHARACTER } from "./type";

const initialState = {
    myFavorites: []
}

export default function reducer (state = initialState, { type, payload }){
    switch (type) {
        case ADD_CHARACTER:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }
        case REMOVE_CHARACTER:
            let newArray = state.myFavorites.filter(character => character.id !== payload);
            return{
                ...state,
                myFavorites: newArray
            }
        default:
            return {...state}
    }
}