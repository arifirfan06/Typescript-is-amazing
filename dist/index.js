"use strict";
console.log("worked?");
// typeof is one kind of narrowing
function test(x) {
    if (typeof x === "number") {
        return x;
    }
    else {
        x;
    }
}
function getDuration(item) {
    // item.epiDuration you cant do this. use in narrowing instead
    if ("episodeNum" in item) {
        // if you add return then the code bellow return will recognize its movie interface
        return item.episodeNum * item.epiDuration;
    }
    return item.duration;
}
console.log(getDuration({ title: "OMG", duration: 77 }));
// instance of can be used to narrow prototype such as Array, Date, etc
function getFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
// getFullDate('2022-10-10')
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printIdentity(entity) {
    // if("name" in Company) {}
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
// : user is User determine TS this is user or not and this function must return boolean
function isUser(user) {
    return user.username !== undefined;
}
function doWork(identity) {
    if (isUser(identity)) {
        identity.username;
        return "you are hired";
    }
    else {
        identity.name;
        return "you are...";
    }
}
// discriminated unions
function getPet(pet) {
    switch (pet.kind) {
        case "fox":
            return "run runn";
        case "elephant":
            return "crush!";
        case "deer":
            return "flee?";
        default:
            // souldnt make it here, if we handle correctly
            const _exhaustedCheck = pet;
            return _exhaustedCheck;
    }
}
console.log(getPet({ name: 'kinoya', kind: 'deer', height: 60 }));
