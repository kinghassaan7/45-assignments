"use strict";
let idols = ["Andrew", "Muhummad"];
let invitation = "I will like to invite you to dinner.";
//     for (let i of idols) {
//     console.log(`Mr. ${i}, ${invitation}`)
// }
// console.log(`You Mr. ${idols[1]} can't come to the dinner`)
// idols[1]="Imran Khan";
// for (let  iupdate of idols) {
//     console.log(`You guys are still invited Mr. ${iupdate}`)   
// }
idols.push("Messi", "Abdullah", "Papa");
idols.unshift("Saad");
idols.push("Qari");
idols.splice(Math.floor(idols.length / 2), 0, "Kamran");
console.log("\t\n I have found a bigger table. \t\n");
for (let i of idols) {
    console.log(`Mr. ${i}, ${invitation}`);
}
