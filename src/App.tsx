import { Provider as ReduxProviver } from "react-redux";
import './styles/global.css'



import { store } from "./store";
import { Player } from "./pages/Player";

function App() {
  return (
    <ReduxProviver store={store}>
<Player />
    </ReduxProviver>
  );
}

export default App;
