interface Item {
    name: string,
    qty: number
}

const printItem = (items:Item) => {
    console.log(`you must buy ${items.name} with ${items.qty}`)
}