import person from './importexport/person.js';
// named exports
import {PI} from './importexport/utilities.js'
import {PI as pi_alias} from './importexport/utilities.js'
import * as bundled from './importexport/utilities.js'
import Square from './Square.js'

console.log(PI + ' from import');
console.log(pi_alias + ' from import');
console.log(person);
bundled.displayPI();
const square = new Square();
square.width = 2;
square.length = 2;
console.log("Square Object" + square);