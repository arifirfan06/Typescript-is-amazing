type Point = {
  x: number;
  y: number;
  //   z: () => {}
};

// INTERFACES only shape object
interface Loc {
  lat: number;
  lng: number;
}

interface KTP {
  readonly id: number;
  fullname: string;
  adress: string;
  married?: boolean;
  // saying?: (text: string) => any;
  saying?(text: any): void;
}

// interfaces almost same as types
const person1: KTP = {
  id: 767,
  fullname: "Calyx Roll",
  adress: "Michigan",
  saying(text) {
    return this.id + 11;
  },
};
// person1.id = 12

const personX: KTP = {
  id: 221,
  fullname: "X",
  adress: "?",
  saying: (text) => `Im ${text}`,
};

interface Product {
  name: string;
  price: number;
  applyDiscount(disc: number): number;
}

const shoes: Product = {
  name: "Blers",
  price: 100,
  applyDiscount(number) {
    const newPrice = this.price * (1 - number);
    return (this.price = newPrice);
  },
};

console.log(shoes.applyDiscount(0.6));

interface Pet {
  type: string;
  age: number;
}

interface Pet {
  name: String;
  // saying(): void;
}

const newGuest: Pet = {
  type: "Bird",
  age: 33,
  name: "Rooger",
  // saying() {
  //   return "Weee";
  // },
};

// extends interface

interface PetJob extends Pet {
job: 'Programer' | 'e-sport' | 'unemployed'
}

const Pet9: PetJob = {
  name: 'gezz',
  age: 23,
  type: 'fox',
  // saying: () => {},
  job: 'unemployed'
}

// add multiple extends with coma (,)

interface AnimalCrossing extends Pet,KTP {
  fav: string
}

const tootie: AnimalCrossing = {
  fav: 'fruit',
  age: 31,
  type: 'elephant',
  name: 'Machie',
  id: 291,
  fullname: 'Weewo',
  adress: 'zzzz',
  saying: () => {}
}

// types vs interfaces
// interfaces only for object
type Book = 'Commu Manifesto' | 'Mao Zedong'
// you cant assign same name in types
// type Z = {x: number}
// type Z = {y: number}

// extending property in types different from interface
type Pc = {
  price: number
}

type CPU = Pc & {mobo: number}