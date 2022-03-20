import { combineReducers } from "redux";
import { pokemonReducer } from "./pokemonReducer"
import { pokemonListReducer } from "./pokemonListReducer"

export const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokemonList: pokemonListReducer
})