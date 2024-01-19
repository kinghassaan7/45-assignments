"use strict";
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    const greatMagicians = [];
    for (const magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}
// Different array of magician names
const Magicians = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
console.log("Original magicians:");
showMagicians(Magicians);
const greatMagicians = makeGreat([...Magicians]); // Create a copy of the array
console.log("\nMagicians after making them great:");
showMagicians(greatMagicians);
console.log("\nOriginal magicians (unchanged):");
showMagicians(Magicians);
