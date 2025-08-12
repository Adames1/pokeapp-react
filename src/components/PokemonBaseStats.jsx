import PokemonProgressBar from "./PokemonProgressBar";

function PokemonBaseStats({ pokeStat }) {
  const { base_stat, stat } = pokeStat;

  return (
    <div className="flex items-center gap-4 py-1">
      <span className="capitalize font-medium text-gray-700 min-w-[100px]">
        {stat.name}
      </span>
      <span className="text-gray-600 font-semibold w-10 text-right">
        {base_stat}
      </span>
      <PokemonProgressBar baseStat={base_stat} />
    </div>
  );
}

export default PokemonBaseStats;
