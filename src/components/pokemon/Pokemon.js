import { useSelector } from "react-redux";
import { formatNumber } from "../../actions/pokemon";
import { icons } from "../../assets/helpers/Helpers";
import { Bar } from "./Bar";

import pokeball from "../../assets/img/pokeball.jpg";

export const Pokemon = () => {
  const pokemon = useSelector(state => state.pokemon);

  const close = () => {
    document.getElementById("pokemon").classList.remove("active");
    const items = document.getElementsByClassName("list-item-selected");
    if (items.length > 0)
      items[0].classList.remove("list-item-selected");

    const items2 = document.getElementsByClassName("pokemon-card-button");
    for (let i = 0; i < items2.length; i++) {
      items2[i].classList.remove("pokemon-card-button-active");
    }

    const cards = document.getElementsByClassName("pokemon-card-item");
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("pokemon-card-item-active");
    }
  }

  const open = (e) => {
    const items = document.getElementsByClassName("pokemon-card-button");
    let item = 0;
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("pokemon-card-button-active");
      if (items[i] === e.target)
        item = i;
    }

    const cards = document.getElementsByClassName("pokemon-card-item");

    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("pokemon-card-item-active");
    }

    cards[item].classList.add("pokemon-card-item-active")
    e.target.classList.add("pokemon-card-button-active");
  }

  return (
    <div className="pokemon" id="pokemon">
      <div className="pokemon-button" onClick={close}>
        <i className="fa-solid fa-xmark close-icon"></i>
      </div>
      {
        pokemon.id ?
          <>
            <div id="poke-img">
              <div className="pokemon-img-div">
                <img src={pokemon.image} alt={pokemon.name} className="pokemon-main-img" />
              </div>
              <h3 className="pokemon-id">{formatNumber(pokemon.id)}</h3>
              <h2 className="pokemon-name">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}<br /> <span className="pokemon-alias">{" The " + pokemon.alias}</span></h2>
              <ul className="pokemon-types">
                {pokemon.types.map((type, index) => (
                  <li className={"pokemon-type " + type} key={index}>
                    <img src={icons("./Icon_" + type + ".webp")} className="pokemon-type-icon" alt={type} />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pokemon-card" id="card">
              <div className="pokemon-card-buttons">
                <div className="pokemon-card-button pokemon-card-button-active" id="card-button-1" onClick={open}>
                  About
                </div>
                <div className="pokemon-card-button" id="card-button-2" onClick={open}>
                  Stats
                </div>
                {
                  pokemon.evolutions &&
                  <div className="pokemon-card-button" id="card-button-3" onClick={open}>
                    Evolutions
                  </div>
                }
              </div>
              <div className="pokemon-card-item" id="pokemon-card-1">
                <h4 className="poke-text">About</h4>
                <p className="pokemon-desc">
                  {pokemon.description}
                </p>
                <div className="pokemon-about">
                  <div className="pokemon-about-item">
                    <p className="pokemon-about-p">
                      <i className="fa-solid fa-weight-scale pokemon-about-icon"></i>
                      <span className="pokemon-about-value"> {pokemon.weight}kg</span>
                    </p>
                    <p className="pokemon-about-title">Weight</p>
                  </div>
                  <div className="pokemon-about-item">
                    <p className="pokemon-about-p">
                      <i className="fa-solid fa-ruler-vertical pokemon-about-icon"></i>
                      <span className="pokemon-about-value"> {pokemon.height}m</span>
                    </p>
                    <p className="pokemon-about-title">Heigth</p>
                  </div>
                </div>
                <h4 className="poke-text">Abilities</h4>
                <ul className="pokemon-abilities">
                  {pokemon.abilities.map((ability, index) => (
                    <li key={index} className="pokemon-abilitie">{ability.toUpperCase()}</li>
                  ))}
                </ul>
              </div>
              <div className="pokemon-card-item" id="pokemon-card-2">
                <h4 className="poke-text">Stats</h4>
                <div className="pokemon-stats">
                  <ul className="pokemon-stats-titles">
                    <li className="pokemon-stat-title">HP</li>
                    <li className="pokemon-stat-title">ATK</li>
                    <li className="pokemon-stat-title">DEF</li>
                    <li className="pokemon-stat-title">SATK</li>
                    <li className="pokemon-stat-title">SDEF</li>
                    <li className="pokemon-stat-title">SPD</li>
                  </ul>
                  <hr />
                  <ul className="pokemon-stats-values">
                    {pokemon.stats.map((stat, index) => (
                      <li key={index} className="pokemon-stat">
                        <span className="pokemon-stat-value">{stat.baseStat}</span>
                        <Bar percent={stat.baseStat} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pokemon-card-item" id="pokemon-card-3">
                {
                  pokemon.evolutions ?
                    <>
                      <h4 className="poke-text">Evolutions</h4>
                      <ul className="pokemon-evolutions">
                        {
                          pokemon.evolutions.firstEvolution.map((evolution, index) => {
                            return (
                              <li key={index} className="pokemon-evolution">
                                <div className="pokemon-evolution-item">
                                  <span className="pokemon-evolution-name">{pokemon.evolutions.base.name.charAt(0).toUpperCase() + pokemon.evolutions.base.name.slice(1)}</span>
                                  <img src={pokemon.evolutions.base.image} alt={pokemon.evolutions.base.name} className="pokemon-evolution-img" />
                                  <div className="pokemon-evolution-types">
                                    {
                                      pokemon.evolutions.base.types.map((type, index) => {
                                        return (
                                          <img src={icons("./Icon_" + type + ".webp")} className="pokemon-evolution-icon" alt={type} key={index} />
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                                <i className="fa-solid fa-arrow-right-long arrow"></i>
                                <div className="pokemon-evolution-item">
                                  <span className="pokemon-evolution-name">{evolution.name.charAt(0).toUpperCase() + evolution.name.slice(1)}</span>
                                  <img src={evolution.image} alt={evolution.name} className="pokemon-evolution-img" />
                                  <div className="pokemon-evolution-types">
                                    {
                                      evolution.types.map((type, index) => {
                                        return (
                                          <img src={icons("./Icon_" + type + ".webp")} className="pokemon-evolution-icon" alt={type} key={index} />
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                              </li>
                            )
                          })
                        }
                      </ul>
                      {
                        pokemon.evolutions.secondEvolution ?
                          <>
                            <ul className="pokemon-evolutions">
                              {
                                pokemon.evolutions.secondEvolution.map((evolution, index) => {
                                  return (
                                    <li key={index} className="pokemon-evolution">
                                      <div className="pokemon-evolution-item">
                                        <span className="pokemon-evolution-name">{pokemon.evolutions.firstEvolution[0].name.charAt(0).toUpperCase() + pokemon.evolutions.firstEvolution[0].name.slice(1)}</span>
                                        <img src={pokemon.evolutions.firstEvolution[0].image} alt={pokemon.evolutions.firstEvolution[0].name} className="pokemon-evolution-img" />
                                        <div className="pokemon-evolution-types">
                                          {
                                            pokemon.evolutions.firstEvolution[0].types.map((type, index) => {
                                              return (
                                                <img src={icons("./Icon_" + type + ".webp")} className="pokemon-evolution-icon" alt={type} key={index} />
                                              )
                                            })
                                          }
                                        </div>
                                      </div>
                                      <i className="fa-solid fa-arrow-right-long arrow"></i>
                                      <div className="pokemon-evolution-item">
                                        <span className="pokemon-evolution-name">{evolution.name.charAt(0).toUpperCase() + evolution.name.slice(1)}</span>
                                        <img src={evolution.image} alt={evolution.name} className="pokemon-evolution-img" />
                                        <div className="pokemon-evolution-types">
                                          {
                                            evolution.types.map((type, index) => {
                                              return (
                                                <img src={icons("./Icon_" + type + ".webp")} className="pokemon-evolution-icon" alt={type} key={index} />
                                              )
                                            })
                                          }
                                        </div>
                                      </div>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          </> : <></>
                      }
                    </>
                    : <></>
                }
              </div>
            </div>
          </> :
          <div className="pokeball-div">
            <img src={pokeball} alt="pokeball" className="pokeball" />
          </div>
      }
    </div>
  )
}
