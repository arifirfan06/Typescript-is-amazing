function ObjFunction(person: { first: string; last: string }): void {}

ObjFunction({ first: "Tim", last: "Cook" });

let coordinate: { lat: number; lng: number } = { lat: 2.111, lng: 33.2112 };

function makeCoordinate(): { lat: number; lng: number } {
  return { lat: Math.random() * 10, lng: Math.random() * 100 };
}

// typescript wont ignore if you assign excesive params directly
ObjFunction({ first: "Brrzz", last: "Brlleee", age: 9300 });
const alien = { first: "Brrzz", last: "Brlleee", age: 9300 };
// ts will allow if you pass it like this
ObjFunction(alien);

// Type Alias
type XYPoint = { x: number; y: number };

// creating type object must add key i.e num, person, etc
function MultiplyObj(num: XYPoint): XYPoint {
  return { x: num.x * 3, y: num.y * 3 };
}

// this make the value have to be extactly same
// type Song = {
//   title: "";
//   artist: "";
//   numStreams: 1234512;
//   credits: {
//     prod: "Calx";
//     writer: "Brooch";
//   };
// };

// type aliases will disappear in .js
type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
      prod: string;
      writer: string;
    };
  };

const bestMusic:Song = {
    title: "Book Burner",
    artist: "Rooger",
    numStreams: 999999,
    credits: {
        prod: 'Mr.White',
        writer: 'Mr.Black'
    }
}

// function calcPayout(song:Song):number {
//     return song.numStreams * 0.0025
// }

function calcPayout(song:Song):number {
    return song.numStreams * 0.0025
}

const earning = calcPayout(bestMusic)
console.log(earning)

// this is optional property add it with ?(question mark)
type Space = {
    x: number,
    y: number,
    z?: number,
}

const blackHole:Space = {
    x: 72.221,
    y: 1212.111,
}


type User = {
    readonly id: number,
    username: string
}

const newUser:User = {
    id: 777,
    username: 'Calyx'
}

newUser.id = 888

type ColorMix = {
    color1: string,
    color2: string,
    color3?: string
}

type Preference = {
    pref: string
}

type Theme = {
    required: boolean,
    theme?: string,
}

// this is intersection / combine types

type ColorMixPref = ColorMix & Preference

const ColPref1:ColorMixPref = {
    color1: 'black',
    color2: 'blue',
    pref: 'midnight'
}

type AdditionalInfo = Preference & Theme & {budget: number} 

const newClient:AdditionalInfo = {pref: 'mint', required: true, budget: 7000}