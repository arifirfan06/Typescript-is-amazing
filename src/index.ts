// console.log('worked')

// GENERICS
// simple generics
const fruits: Array<string> = ["pear"];

const inputG = document.querySelector<HTMLInputElement>("#gInput")!;
const btnG = document.querySelector<HTMLButtonElement>(".btn")!;
inputG.value = "hacked!";

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function boolIdentity(item: boolean): boolean {
  return item;
}

type Fox = {
  name: string;
  combat: boolean;
};

// GENERICS IMPLEMENTATION
function identity<Type>(item: Type): Type {
  return item;
}

identity<Fox>({ name: "kurok", combat: true });

// T same as Type
function randomElement<T>(list: T[]): T {
  const randIndex = Math.floor(Math.random() * list.length);
  return list[randIndex];
}

const randomElement2 = <T>(list: T[]): T => {
  const randIndex = Math.floor(Math.random() * list.length);
  return list[randIndex];
};

console.log(randomElement<number>([22, 11, 3]));

// generics with multiple type parameters

// this <> follow the alphabet
function merge<T, U>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const Elephy = merge({ name: "Knipie" }, { skills: ["attack", "heal"] });

interface Action {
    skills: string[]
    favFood?: string
}

// add type constrait in generics
function mergeAdv<T  extends object, U extends Action>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const Ione = mergeAdv({}, { skills: ["attack", "heal"], favFood:"apple" })

// default type generic param
function makeList<T = string>():T[] {
    return []
}

const numberList = makeList<number>()
const stringList = makeList()

// generics in class

interface Book {
    name: string,
    publishYear: number
}

interface Music {
    title: string,
    published: boolean
}

class DoList <T> {
    public queue: T[] = []
    add(el: T) {
        this.queue.push(el)
    }
}

const newBook = new DoList<Book>()

newBook.add({name: 'X', publishYear: 2200})