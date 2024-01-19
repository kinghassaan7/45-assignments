"use strict";
let make_shirt = (size = "Large", text = "I love Python") => (`Your shirt size is ${size} and ${text} is written on it.`);
console.log(make_shirt());
console.log(make_shirt('Medium'));
console.log(make_shirt('Small', 'I love TypeScript'));
