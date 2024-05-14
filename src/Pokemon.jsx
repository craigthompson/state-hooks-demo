import { useState, useEffect } from "react";
import axios from "axios";

export default function Pokemon(props) {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${props.num}`)
      .then((response) => {
        setPokemon(response.data.results);
      });
  };

  const pokemonList = pokemon.map((p) => <li key={p.name}>{p.name}</li>);

  //  useEffect accepts 2 arguments, a required callbackFunc and an optional 'dependency array'.
  //  useEffect will call it's callbackFunc on every render, unless we provide a dependency array.
  //  If the dependency array is empty [], then the callbackFunc will only be invoked on the INITIAL render.
  //    otherwise, the callbackFunc will be invoked every time any element placed in the dependency array is changed/used (can pass in functions).
  useEffect(() => {
    getPokemon();
    console.log("useEffect");
  }, []);

  return (
    <div>
      <ul>{pokemonList}</ul>
    </div>
  );
}
