import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../../actions/pokemon";

import logo from "../../assets/img/pokeball.jpg";

export const PokeSearch = () => {

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemon(search, true));
  }
  


  return (
    <div className="poke-form">
      <a href="./" className="poke-logo">
        <img src={logo} alt="img-logo" className="img-logo" />
        <h1 className="text-logo">Pokédex</h1>
      </a>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="form">
          <input type="text" placeholder="Search for a Pokemon" onChange={handleChange} className="input" />
          <button type="submit" className="button"><i className="fa-solid fa-magnifying-glass"></i> Search</button>
        </div>
      </form>
    </div>
  )
}
