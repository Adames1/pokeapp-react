import { Routes, Route } from "react-router-dom";
import LayoutMain from "../layout/LayoutMain";
import HomePage from "../pages/HomePage";
import PokemonDetails from "../pages/PokemonDetails";
import PokemonList from "../pages/PokemonList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<LayoutMain />}>
        <Route path="/pokemonlist" element={<PokemonList />} />
      </Route>
      <Route path="/Pokemondetails" element={<PokemonDetails />} />
    </Routes>
  );
}

export default AppRoutes;
