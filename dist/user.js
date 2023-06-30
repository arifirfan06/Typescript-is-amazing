// import { type Pet, Color } from "./mainTypes" this also possible
export default class User {
    constructor(nickname, email, age) {
        this.nickname = nickname;
        this.email = email;
        this.age = age;
    }
    logIn() {
        return `${this.nickname} has login`;
    }
}
export function Helper() {
    return "do you need antyhing?";
}
