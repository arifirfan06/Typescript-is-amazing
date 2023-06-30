"use strict";
// console.log('worked')
class Food {
    // fav: boolean
    constructor(name, calories) {
        //   public & private modifier
        //   public can be visible outside class
        //   readonly cant be changed
        //   public eaten: number = 0;
        this.eaten = 0;
        this.name = name;
        this.calories = calories;
    }
    secretMethod() {
        console.log("FOOOOD");
    }
}
// the shortcut version
class FoodX {
    //   private eaten: number = 0;
    //  constructor arranged based on the order
    constructor(name, calories, 
    // this _ indicate its hidden property. to told devs not to touch it. but its fu**ing
    // meaningless if you/others dont know what it is because js/ts still let you touch it
    // protected means it can be accessed in child/extend class
    _eaten) {
        this.name = name;
        this.calories = calories;
        this._eaten = _eaten;
    }
    secretMethod() {
        console.log("FOOOOD");
    }
    get howMany() {
        return `${this.name} has been eaten ${this.eaten} times`;
    }
    get eaten() {
        return this._eaten;
    }
    set eaten(count) {
        if (count < 0) {
            throw new Error("eaten number cant be negative");
        }
        this._eaten = count;
    }
}
class TopFood extends FoodX {
    // public isTop: boolean = true
    constructor(name, calories, isTop, _eaten) {
        super(name, calories, _eaten);
        this.name = name;
        this.calories = calories;
        this.isTop = isTop;
        this._eaten = _eaten;
    }
    setEaten() {
        this._eaten = 99;
    }
}
const burger = new Food("Burger", 50);
// burger.eaten
burger.secretMethod();
const pizza = new FoodX("pizza", 90, 3);
pizza.eaten = 12;
console.log(pizza);
const sushi = new TopFood("Sushi", 40, true, 3);
class AncientBook {
    constructor(color, accessable) {
        this.color = color;
        this.accessable = accessable;
    }
}
class MagicDevice {
    constructor(diamond, color) {
        this.diamond = diamond;
        this.color = color;
    }
    summon() {
        console.log("hrrr");
    }
}
// abstract class must be implemented in child class and cant be initialized like the others
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    // unlike interface you can pass function here
    greet() {
        console.log("nice to meet you");
    }
}
class PartTime extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    isPaid() {
        return false;
    }
}
class FullTime extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    isPaid() {
        return true;
    }
}
