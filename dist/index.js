"use strict";
// console.log('worked')
// GENERICS
// simple generics
const fruits = ["pear"];
const inputG = document.querySelector("#gInput");
const btnG = document.querySelector(".btn");
inputG.value = "hacked!";
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function boolIdentity(item) {
    return item;
}
// GENERICS IMPLEMENTATION
function identity(item) {
    return item;
}
identity({ name: "kurok", combat: true });
// T same as Type
function randomElement(list) {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}
const randomElement2 = (list) => {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
};
console.log(randomElement([22, 11, 3]));
// generics with multiple type parameters
// this <> follow the alphabet
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const Elephy = merge({ name: "Knipie" }, { skills: ["attack", "heal"] });
// add type constrait in generics
function mergeAdv(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const Ione = mergeAdv({}, { skills: ["attack", "heal"], favFood: "apple" });
// default type generic param
function makeList() {
    return [];
}
const numberList = makeList();
const stringList = makeList();
class DoList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const newBook = new DoList();
newBook.add({ name: 'X', publishYear: 2200 });
