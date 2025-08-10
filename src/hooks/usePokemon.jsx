import { useContext } from "react";
import { PokemonContext } from "../context/PokemonsContext";

function usePokemon() {
  const context = useContext(PokemonContext);
  if (!context)
    throw new Error("usePokemon must be used within a PokemonsProvider");
  return context;
}

export default usePokemon;
