import { useSelector } from "react-redux"
import { ListItem } from "./ListItem";
import { PokeSearch } from "./PokeSearch";

export const PokemonList = () => {

    const data = useSelector(state => state.pokemonList);
    return (
        <div className="poke-bar">
            <PokeSearch />
            <div className="poke-list" >
                {
                    data.length > 0 ?
                        data.map((pokemon) => {
                            return <ListItem key={pokemon.id} pokemon={pokemon} />
                        })
                        : <></>
                }
            </div>
        </div>
    )
}
