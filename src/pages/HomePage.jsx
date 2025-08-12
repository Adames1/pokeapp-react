import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Welcome to <span className="text-emerald-500">PokeApp!</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        {/* Enlace activo */}
        <Link
          to="/pokemonlist"
          className="bg-emerald-400 text-white font-semibold py-4 rounded-lg shadow hover:shadow-md transition card-home text-center"
        >
          Pokedex
        </Link>

        {/* Enlaces deshabilitados */}
        {["Moves", "Abilities", "Items", "Locations", "Types Charts"].map(
          (label) => (
            <Link
              key={label}
              to="#"
              onClick={(e) => e.preventDefault()}
              className="bg-gray-300 text-gray-600 font-medium py-4 rounded-lg relative cursor-not-allowed opacity-60 pointer-events-none card-home text-center"
              aria-disabled="true"
            >
              ⚙️ {label}
              <span className="absolute top-1 right-2 text-xs bg-white text-gray-700 px-2 py-0.5 rounded shadow">
                Próximamente
              </span>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default HomePage;
