import usePokemon from "../hooks/usePokemon";
import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";

function PokemonList() {
  const { pokemons, loading, error } = usePokemon();

  if (loading) return <Loading />;
  if (error) return <ErrorComponent />;

  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
