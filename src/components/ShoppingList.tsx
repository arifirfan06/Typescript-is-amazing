import Item from "../models/item";

interface SLProps {
items: Item[]
}

function ShoppingList({items}: SLProps): JSX.Element {
  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - qty: {item.qty}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;
