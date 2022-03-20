import { useDispatch } from "react-redux";
import { Pokemon } from "./pokemon/Pokemon"
import { PokemonList } from "./pokemon/PokemonList"
import { pokemonList } from "../actions/pokemon";
import { useEffect } from "react";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pokemonList());
    
  }, [dispatch]);
  

  return (
    <div className="container">
      <PokemonList />
      <Pokemon />
    </div>
  )
}
