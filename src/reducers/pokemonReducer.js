import {types} from "../types/types";

const initialState = {
    
}

export const pokemonReducer = (state = {initialState}, action) => {
    switch (action.type) {
        case types.setPokemon:
            return {
                ...action.payload
            };
        default:
            return state;
    }
}