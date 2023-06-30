import {useRef} from "react"

interface SForm {
    onAddItem: (item:string, qty: number) => void
}

function ShoppingForm({onAddItem}: SForm): JSX.Element {
    const itemName = useRef<HTMLInputElement>(null)
    const itemQty = useRef<HTMLInputElement>(null)

    function submitHandler(ev: React.FormEvent) {
        ev.preventDefault()
        const nameInput = itemName.current!.value
        const qtyInput = itemQty.current!.value
        onAddItem(nameInput, +qtyInput)
        itemName.current!.value = ""
    }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Item name" ref={itemName} />
        <input type="number" placeholder="Item qty" ref={itemQty} min={0}/>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default ShoppingForm;
