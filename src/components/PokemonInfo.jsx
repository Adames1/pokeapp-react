import { useEffect, useState } from "react";
import PokemonBaseStats from "./PokemonBaseStats";

function PokemonInfo({ pokemon }) {
  const [activeTab, setActiveTab] = useState("about");
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const fetchSpeciesPokemon = async () => {
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setSpecies(data);
      } catch (error) {
        console.error("Error fetching species:", error.message);
      }
    };

    fetchSpeciesPokemon();
  }, [pokemon.id]);

  return (
    <div className="mt-6">
      {/* Tabs menu */}
      <div className="flex gap-4 border-b mb-4">
        {["about", "stats", "moves"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-semibold capitalize border-b-2 transition ${
              activeTab === tab
                ? "border-emerald-500 text-emerald-600"
                : "border-transparent text-gray-500 hover:text-emerald-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="text-gray-700">
        {activeTab === "about" && (
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p>
                <strong>Height:</strong> {pokemon.height}
              </p>
              <p>
                <strong>Weight:</strong> {pokemon.weight}
              </p>
              <p>
                <strong>Abilities:</strong>{" "}
                {pokemon.abilities
                  .map((ability) => ability.ability.name)
                  .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
                  .join(", ")}
              </p>
            </div>
            <div>
              <p>
                <strong>Breeding</strong>
              </p>
              <p>
                Egg Groups:{" "}
                {species?.egg_groups
                  ?.map((egg) => egg.name)
                  .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
                  .join(", ") || "N/A"}
              </p>
            </div>
          </div>
        )}

        {activeTab === "stats" && (
          <div className="grid gap-2">
            {pokemon.stats.map((pokeStat, index) => (
              <PokemonBaseStats key={index} pokeStat={pokeStat} />
            ))}
          </div>
        )}

        {activeTab === "moves" && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {pokemon.moves.map((move, index) => (
              <span
                key={index}
                className="capitalize px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
              >
                {move.move.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonInfo;
