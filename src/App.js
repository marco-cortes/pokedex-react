import { Provider } from "react-redux";
import { PokemonApp } from "./components/PokemonApp";
import { store } from "./store/store";

import "./assets/css/style.css";

function App() {

  return (
    <div>
      <Provider store={store}>
        <PokemonApp />
      </Provider>
    </div>
  );
}

export default App;
