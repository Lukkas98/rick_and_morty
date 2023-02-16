import { ADD_CHARACTER, FILTER, ORDER, REMOVE_CHARACTER } from "./type";
import axios from "axios";

export function addCharacter(character) {
    return async (dispatch) => {
        try {
            let {data} = await axios.post('http://localhost:3001/rickandmorty/fav', character);
            dispatch({
                type: ADD_CHARACTER,
                payload: data
            })
        } catch (error) {
            return error;
        }
    };
};

export function removeCharacter(id){
    return async (dispatch)=>{
        try {
            let {data} = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
            dispatch({
                type: REMOVE_CHARACTER,
                payload: data.id
            })
        } catch (error) {
            return error
        }   
    };
};

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