import PokemonProgressBar from "./PokemonProgressBar";

function PokemonBaseStats({ pokeStat }) {
  const { base_stat, stat } = pokeStat;

  return (
    <p>
      {stat.name} {base_stat} {/* progress bar */}{" "}
      <PokemonProgressBar baseStat={base_stat} />
    </p>
  );
}

export default PokemonBaseStats;
