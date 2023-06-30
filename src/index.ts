// console.log('worked')

class Food {
  // this two type tell ts that this class have name, and calories with its types
  readonly name: string;
  calories: number;
  //   public & private modifier
  //   public can be visible outside class
  //   readonly cant be changed
  //   public eaten: number = 0;
  private eaten: number = 0;
  // fav: boolean
  constructor(name: string, calories: number) {
    this.name = name;
    this.calories = calories;
  }
  secretMethod(): void {
    console.log("FOOOOD");
  }
}

// the shortcut version
class FoodX {
  //   private eaten: number = 0;
  //  constructor arranged based on the order
  constructor(
    public readonly name: string,
    public calories: number,
    // this _ indicate its hidden property. to told devs not to touch it. but its fu**ing
    // meaningless if you/others dont know what it is because js/ts still let you touch it
    // protected means it can be accessed in child/extend class
    protected _eaten: number
  ) {}
  secretMethod(): void {
    console.log("FOOOOD");
  }
  get howMany(): string {
    return `${this.name} has been eaten ${this.eaten} times`;
  }
  get eaten(): number {
    return this._eaten;
  }
  set eaten(count: number) {
    if (count < 0) {
      throw new Error("eaten number cant be negative");
    }
    this._eaten = count;
  }
}

class TopFood extends FoodX {
  // public isTop: boolean = true
  constructor(
    public readonly name: string,
    public calories: number,
    public isTop: boolean,
    public _eaten: number
  ) {
    super(name, calories, _eaten);
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
// INTERFACE X CLASSES

interface ColorX {
  color: string;
}

interface AncientDevice {
  diamond: number;
  summon(): void;
}

class AncientBook implements ColorX {
  constructor(public color: string, public accessable: boolean) {}
}

class MagicDevice implements ColorX, AncientDevice {
  constructor(public diamond: number, public color: string) {}
  summon(): void {
    console.log("hrrr");
  }
}

// abstract class must be implemented in child class and cant be initialized like the others
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract isPaid(): boolean | number;
  // unlike interface you can pass function here
  greet(): void {
    console.log("nice to meet you");
  }
}

class PartTime extends Employee {
  constructor(public first: string, public last: string, private salary: number) {
    super(first, last)
  }
  isPaid(): boolean {
    return false;
  }
}

class FullTime extends Employee {
  constructor(public first: string, public last: string, private salary: number) {
    super(first, last)
  }
  isPaid(): boolean {
    return true;
  }
}
