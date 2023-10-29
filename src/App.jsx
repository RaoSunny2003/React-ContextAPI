import "./App.css";
import Cart from "./components/Cart";
import { Item } from "./components/Item";

function App() {
  return (
    <>
      <h1>Context API</h1>
      <Item name="MacBook" price={1000} />
      <Item name="Apple Cloth" price={1000} />
      <Item name="Pendrive" price={10} />
      <Cart />
    </>
  );
}

export default App;
