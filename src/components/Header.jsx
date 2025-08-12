import { Link } from "react-router-dom";
import { Menu, MoveLeft } from "lucide-react";

function Header() {
  return (
    <header className="w-full h-16 bg-white shadow-md">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <Link
          to="/"
          aria-label="Volver al inicio"
          className="text-gray-700 hover:text-emerald-500 transition"
        >
          <MoveLeft size={24} />
        </Link>

        <h1 className="text-lg font-bold text-gray-800">PokeApp</h1>

        <button
          aria-label="Abrir menú"
          className="text-gray-700 hover:text-emerald-500 transition"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}

export default Header;
