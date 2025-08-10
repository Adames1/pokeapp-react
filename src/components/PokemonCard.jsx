import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  const { name, id, sprites, types } = pokemon;

  return (
    <Link to="/Pokemondetails">
      <div>
        <div>
          <h2>{name}</h2>
          <span>{`#${id}`}</span>
        </div>
        <span>{types[0].type.name}</span>
      </div>
      <img src={sprites.front_default} alt={`Sprite of ${name}`} />
    </Link>
  );
}

export default PokemonCard;
