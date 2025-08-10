import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Welcome to PokeApp</h1>
      <div>
        <Link to="/pokemonlist">Pokedex</Link>
        <Link>Moves</Link>
        <Link>Abilities</Link>
        <Link>Items</Link>
        <Link>Locations</Link>
        <Link>Types Charts</Link>
      </div>
    </div>
  );
}

export default HomePage;
