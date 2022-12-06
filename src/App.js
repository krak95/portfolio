import Router from "./Router/Router"
import "./App.css"
import Topmenu from "./Components/topmenu/topMenu";
import Login from "./Zones/Login/Login";
import Cart from "./Zones/Cart/Cart";

function App() {
  return (
  <>
  <Router/>
  <Cart/>
  </>
  );
}

export default App;
