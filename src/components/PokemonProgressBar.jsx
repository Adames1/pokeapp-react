function PokemonProgressBar({ baseStat }) {
  // Normalizamos el valor para que la barra tenga un máximo de 100%
  const percentage = Math.min(baseStat, 150); // puedes ajustar el máximo si lo deseas

  // Color dinámico según el valor
  const getColor = () => {
    if (percentage < 50) return "bg-red-400";
    if (percentage < 100) return "bg-yellow-400";
    return "bg-green-400";
  };

  return (
    <div className="relative w-full h-4 bg-gray-200 rounded overflow-hidden">
      <div
        className={`absolute left-0 top-0 h-full ${getColor()} transition-all duration-300`}
        style={{ width: `${(percentage / 150) * 100}%` }}
      />
    </div>
  );
}

export default PokemonProgressBar;
