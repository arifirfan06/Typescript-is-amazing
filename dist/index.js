"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
(0, axios_1.default)("https://jsonplaceholder.typicode.com/users")
    .then(({ data }) => {
    // console.log(data.company.catchPhrase)
    data.forEach(printData);
})
    .catch((err) => console.log("there is error", err));
function printData(data) {
    console.log(data.name);
    console.log(data.website);
    console.log(data.email);
}
