import { useEffect, useState } from "react";
import { Mars, Venus } from "lucide-react";
import PokemonBaseStats from "./PokemonBaseStats";

function PokemonInfo({ pokemon }) {
  const [activeTab, setActiveTab] = useState("about");
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    const fetchSpeciesPokemon = async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`
      );
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setSpecies(data);
    };

    fetchSpeciesPokemon();
  }, [pokemon.id]);

  return (
    <div>
      {/* menu tabs */}
      <menu>
        <div onClick={() => setActiveTab("about")}>About</div>
        <div onClick={() => setActiveTab("stats")}>Base Stats</div>
        <div onClick={() => setActiveTab("moves")}>Moves</div>
      </menu>

      {/* content menu tabs */}
      <div>
        {/* about content */}
        {activeTab === "about" && (
          <div>
            <div>
              <p>Height {pokemon.height}</p>
              <p>Weight {pokemon.weight}</p>
              <p>
                Abilities
                {pokemon.abilities
                  .map((ability) => ability.ability.name)
                  .join(", ")}
              </p>
            </div>
            <div>
              <strong>Breading</strong>
              <p>
                Egg Groups{" "}
                {species?.egg_groups.map((egg) => egg.name).join(", ")}
              </p>
            </div>
          </div>
        )}

        {/* base stats content */}
        {activeTab === "stats" && (
          <div>
            <div>
              {pokemon.stats.map((pokeStat, index) => (
                <PokemonBaseStats key={index} pokeStat={pokeStat} />
              ))}
            </div>
          </div>
        )}

        {/* moves content */}
        {activeTab === "moves" && (
          <div>
            {pokemon.moves.map((moves, index) => (
              <p key={index}>{moves.move.name}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonInfo;
