import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import PokemonProvider from "./context/PokemonsContext";

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
