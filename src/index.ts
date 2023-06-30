// must be utils.js for vanila js
import { add, sample as randomSample } from "./utils.js"
import MainUser, {Helper} from './User.js'
const sample = 44005
console.log(randomSample([1,5,2,7]))
console.log(add(1, 9))
const newUser = new MainUser('Bargo','zzz', 22)
console.log(newUser.logIn())