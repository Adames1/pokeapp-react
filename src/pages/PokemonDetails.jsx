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
    <div className="container mx-auto px-4 py-6">
      <header className="mb-4">
        <Link
          to="/pokemonlist"
          aria-label="Volver a la lista de Pokémon"
          className="text-gray-700 hover:text-emerald-500 transition flex items-center gap-2"
        >
          <MoveLeft size={20} />
          <span className="font-medium">Volver</span>
        </Link>
      </header>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={pokemon.sprites.front_default}
          alt={`Sprite of ${pokemon.name}`}
          className="w-40 h-40 object-contain"
        />

        <div className="text-center md:text-left">
          <h2 className="capitalize font-bold text-2xl text-gray-800">
            {pokemon.name}
          </h2>
          <span className="text-gray-600 font-semibold block mb-2">
            {`#${pokemon.id.toString().padStart(3, "0")}`}
          </span>

          <div className="flex gap-2 justify-center md:justify-start flex-wrap">
            {pokemon.types.map((type, index) => (
              <span
                key={index}
                className="capitalize px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <PokemonInfo pokemon={pokemon} />
      </div>
    </div>
  );
}

export default PokemonDetails;
