"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians 
// by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
let magicianNames = ['Ali', 'amir', 'adnan'];
function make_great() {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = 'The Great ' + magicianNames[i];
        console.log(magicianNames[i]);
    }
    return;
}
make_great();
console.log(magicianNames);
