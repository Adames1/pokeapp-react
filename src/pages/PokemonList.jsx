import usePokemon from "../hooks/usePokemon";
import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";

function PokemonList() {
  const { pokemons, loading, error } = usePokemon();

  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;

  return (
    <div className="container mx-auto px-4 py-6 min-h-screen">
      <h1
        className="font-bold text-2xl md:text-3xl text-center text-gray-800"
        aria-label="Listado de Pokémon"
      >
        Pokedex
      </h1>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
