import { createContext, useState, useEffect } from "react";
import Loading from "../components/Loading";
import { getAllPokemons } from "../services/api";

export const PokemonContext = createContext();

function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const pokemons = await getAllPokemons();
        setPokemons(pokemons);
      } catch (error) {
        console.error("Error fetching data", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PokemonContext.Provider value={{ loading, error, pokemons }}>
      {loading ? <Loading /> : children}
    </PokemonContext.Provider>
  );
}

export default PokemonProvider;
