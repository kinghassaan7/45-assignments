"use strict";
let show_magicians = (magicianNames) => {
    for (let magicianNames of magicians) {
        console.log(magicianNames);
    }
};
let magicians = ['Harry Houdini', 'David Copperfield', 'Criss Angel'];
console.log(show_magicians(magicians));
