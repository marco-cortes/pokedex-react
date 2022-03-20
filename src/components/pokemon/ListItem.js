import { useRef } from "react";
import { useDispatch } from "react-redux";
import { formatNumber, getPokemon } from "../../actions/pokemon";

export const ListItem = ({ pokemon }) => {

    const { id, name, image } = pokemon;
    const dispatch = useDispatch();

    const img = useRef(null);

    const selectPokemon = () => {
        dispatch(getPokemon(id));
    }


    return (
        <div className="list-item" onClick={selectPokemon} id={id}>
            <h3 className="list-title">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <div className="list-div">
                <span className="list-num">{formatNumber(id)}</span>
                <img className="list-img" src={image} alt={name} ref={img} />
            </div>
        </div>
    )
}
