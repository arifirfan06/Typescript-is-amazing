console.log("worked?");

// typeof is one kind of narrowing

function test(x: number | null) {
  if (typeof x === "number") {
    return x;
  } else {
    x;
  }
}

// narrowing with operator
interface Movie {
  title: string;
  duration: number;
}

interface TV {
  title: string;
  episodeNum: number;
  epiDuration: number;
}

function getDuration(item: Movie | TV) {
  // item.epiDuration you cant do this. use in narrowing instead
  if ("episodeNum" in item) {
    // if you add return then the code bellow return will recognize its movie interface
    return item.episodeNum * item.epiDuration;
  }
  return item.duration;
}

console.log(getDuration({ title: "OMG", duration: 77 }));

// instance of can be used to narrow prototype such as Array, Date, etc

function getFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

// getFullDate('2022-10-10')

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printIdentity(entity: User | Company) {
  // if("name" in Company) {}
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}

// : user is User determine TS this is user or not and this function must return boolean
function isUser(user: User | Company): user is User {
  return (user as User).username !== undefined;
}

function doWork(identity: User | Company) {
  if (isUser(identity)) {
    identity.username;
    return "you are hired";
  } else {
    identity.name;
    return "you are...";
  }
}

interface Fox {
  name: string;
  height: number;
  kind: "fox";
}

interface Elephant {
  name: string;
  height: number;
  kind: "elephant";
}

interface Deer {
  name: string;
  height: number;
  kind: "deer";
}

type PetCandidate = Fox | Elephant | Deer;

// discriminated unions
function getPet(pet: PetCandidate) {
  switch (pet.kind) {
    case "fox":
      return "run runn";
    case "elephant":
      return "crush!";
    case "deer":
      return "flee?";
    default:
        // souldnt make it here, if we handle correctly
        const _exhaustedCheck: never = pet
        return _exhaustedCheck
  }
}

console.log(getPet({name: 'kinoya', kind: 'deer', height: 60}))