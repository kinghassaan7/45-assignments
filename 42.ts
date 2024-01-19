function showMagicians1(magicians1: string[]): void {
    for (const magician1 of magicians1) {
        console.log(magician1);
    }
}

function makeGreat1(magicians1: string[]): void {
    for (let i = 0; i < magicians1.length; i++) {
        magicians1[i] = "the Great " + magicians1[i];
    }
}

// Example array of magician names
const magicians1: string[] = ["Merlin", "Gandalf", "Houdini", "Dumbledore"];

console.log("Original magicians:");
showMagicians1(magicians1);

makeGreat1(magicians1);
console.log("\nMagicians after making them great:");
showMagicians1(magicians1);
