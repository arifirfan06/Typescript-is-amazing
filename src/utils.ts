export function add(x: number, y: number) {
return x + y
}

export const sample =<T> (arr: T[]):T => {
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}