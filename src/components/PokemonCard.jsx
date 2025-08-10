import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  const { name, id, sprites, types } = pokemon;

  return (
    <Link to={`/Pokemondetails/${id}`}>
      <div>
        <div>
          <h2>{name}</h2>
          <span>{`#${id.toString().padStart(3, "0")}`}</span>
        </div>
        <span>{types.map((type) => type.type.name)}</span>
      </div>
      <img src={sprites.front_default} alt={`Sprite of ${name}`} />
    </Link>
  );
}

export default PokemonCard;
