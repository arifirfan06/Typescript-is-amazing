// this is union type you can assign many types
let pref: string | number | boolean = false

pref = true

type Space = {
    x: number,
    y: number,
    z: number
}

type Loc = {
    lat: number,
    lng: number
}

// this apply Space OR Loc type
let place: Space | Loc = {x: 212, y: 221, z: 2111}

place = {lat: 98, lng: 767}

// union types in function

function age(age: number | string):void {
console.log(`your age is ${age}`)
}

age(22)
age('11')

// Type Narrowing or if check in types function

function bookData(price: string | number, quantity: number) {
if (typeof price === 'string') {
    return price.replace('$', '')
}
else {
    console.log(price * quantity)
}
}
// const stuff: number | string[] = [1,2]
// const stuff: number[] | string[] = [1,2, 'aaa']

// union types of arrays is here bellow
const stuff: (number | string)[] = [1,2]
const locDetail: (Loc | Space)[] = [{x:12, y:212, z: 12}, {lng: 21, lat: 99}]

function multiDimension(loc: Loc | Space) {

}

const coordinate:(Loc | Space)[] = []
coordinate.push({lat: 112, lng: 321})
coordinate.push({x: 121, y:897, z: 765})

// literal types are value declared like types
let zero:0 = 0
// this wont work
// let hi:'hi' = 'Hi'
let game: 'ZGravity' | 2048 | 'Redux Chatostrophe' = 2048
game = 'ZGravity'

type RandomStuff = ('Magix' | 'Spacebattleship' | 2048 | 'Code' | true | 'Typescript')[]
type RandomStuff2 = 'Magix' | 'Spacebattleship' | 2048 | 'Code' | true | 'Typescript'
let codes: RandomStuff = ['Typescript', 'Code']

function flyToSpace(answer: RandomStuff2) {
    if(answer === 'Spacebattleship' || 2048) {
        return console.log('you are correct')
    }
}

flyToSpace(2048)