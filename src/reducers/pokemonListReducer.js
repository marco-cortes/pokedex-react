import { types } from "../types/types";

export const pokemonListReducer = (state = {}, action) => {
    switch (action.type) {
        case types.setPokemonList:
            return action.payload;
        default:
            return state;
    }
}