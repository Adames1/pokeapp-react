import { Link } from "react-router-dom";
import { typeColors } from "../utils/colors";

function PokemonCard({ pokemon }) {
  const { name, id, sprites, types } = pokemon;

  const mainType = types[0]?.type.name;
  const bgClass = typeColors[mainType] || "bg-gray-200";

  return (
    <Link
      to={`/Pokemondetails/${id}`}
      aria-label={`Ver detalles de ${name}`}
      className={`relative flex items-center justify-between px-4 py-4 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105 ${bgClass} bg-[url('/pokeball.png')] bg-no-repeat bg-right-bottom bg-[length:90px] md:bg-[length:150px] lg:bg-[length:170px]`}
    >
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2 items-center">
          <h2 className="capitalize font-bold text-lg md:text-xl">{name}</h2>
          <span className="font-semibold">{`#${id
            .toString()
            .padStart(3, "0")}`}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {types.map((type, index) => (
            <span
              key={index}
              className="capitalize px-3 py-1 bg-white/40 rounded-full text-sm font-medium ring-1 ring-white"
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>

      <img
        src={sprites.front_default}
        alt={`Sprite of ${name}`}
        className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain"
      />
    </Link>
  );
}

export default PokemonCard;
