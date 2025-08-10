import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

import Loading from "../components/Loading";
import PokemonInfo from "../components/PokemonInfo";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) throw new Error("Error fetching pokemons");
        const data = await res.json();
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching pokemons", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <div>
      <header>
        <Link to="/pokemonlist">
          <MoveLeft />
        </Link>
      </header>
      <div>
        <div>
          <div>
            <h2>{pokemon.name}</h2>
            <span>{`#${pokemon.id.toString().padStart(3, "0")}`}</span>
          </div>
          <span>{pokemon.types.map((type) => type.type.name)}</span>
        </div>
        <img
          src={pokemon.sprites.front_default}
          alt={`Sprite of ${pokemon.name}`}
        />
      </div>
      <PokemonInfo pokemon={pokemon} />
    </div>
  );
}

export default PokemonDetails;
