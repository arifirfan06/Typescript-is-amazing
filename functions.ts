// void means the function doesnt return anything
function increment(num: number): number {
  // num.toUpperCase()
  return ++num;
}

function greet(person: string) {
  return `hello I'm ${person}`;
}

const doThis = (person: string, age: number, isSingle: boolean) => {};

doThis("Celeme", 18, true);

function greet2(person: string = "Anonymous"): string {
  return `hello I'm ${person}`;
}

console.log(greet2("mike"));

function multiReturn(num: number): number | string {
  if (Math.random() < 0.5) {
    return "You WIN!";
  }
  return num;
}

const themes = ["dark", "light", "blue"];

console.log(
  themes.map((color) => {
    return color.toUpperCase();
  })
);

function execute(): void {
  console.log(
    "void !return data, you can stop operation with return but dont assign return with data in void thype"
  );
  return;
  //   return 'dont do this'
}

// never used for throw exception or function that always running
function errMsg(err: string): never {
  throw new Error(err);
}

function neverr(limit:number):never {
  let text = "";
  let i = 0;
  while (true) {
    text += "<br>The number is " + i;
    i++;
  }
}


