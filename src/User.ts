// import type guaranteed to be removed in js and fix babel issue
import type { Pet, Color } from "./mainTypes"
// import { type Pet, Color } from "./mainTypes" this also possible
export default class User implements Pet {
    constructor(public nickname: string, public email: string,public age: number) {}
    logIn() {
        return `${this.nickname} has login`
    }
}

export function Helper(): string {
    return "do you need antyhing?"
}