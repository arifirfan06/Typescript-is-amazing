import { useState } from "react";
import "./App.css";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import ShoppingForm from "./components/ShoppingForm";
import { v4 as getId } from "uuid";

const hello: string = "Hi TSX";
console.log(hello);
const printMe = <T,>(x: T): T => {
  return x;
};

function App() {
  const [items, setItems] = useState<Item[]>([]);
  // const items = [
  //   { id: 1, product: "Lemon", qty: 5 },
  //   { id: 2, product: "Manggo", qty: 5 },
  // ];
  const addItem = (item: string, qty: number) => {
    console.log("reached", item);
    setItems([...items, { id: getId(), product: item, qty}]);
  };
  return (
    <>
      <h1>Hey TS!</h1>
      <Greeter name="Rio" />
      <ShoppingForm onAddItem={addItem} />
      <ShoppingList items={items} />
    </>
  );
}

export default App;
