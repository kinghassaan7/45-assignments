function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}

// Different array of magician names
const Magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];

console.log("Original magicians:");
showMagicians(Magicians);

const greatMagicians = makeGreat([...Magicians]); // Create a copy of the array
console.log("\nMagicians after making them great:");
showMagicians(greatMagicians);

console.log("\nOriginal magicians (unchanged):");
showMagicians(Magicians);
