"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array 
// with the Great added to each magician’s name.
let magicianNames = ['Ali', 'amir', 'adnan'];
function unchanged_magicians(magicians) {
    return [...magicians];
}
function make_great(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = "The Great " + magicianNames[i];
        // console.log(magicianNames[i]);
    }
    return;
}
function show_magicians(magicianNames) {
    magicianNames.forEach((element) => {
        console.log(element);
    });
}
let unchanged_magician = unchanged_magicians(magicianNames);
make_great(unchanged_magician);
console.log("Original Array:");
show_magicians(magicianNames);
console.log("\nArray with 'The Great':");
show_magicians(unchanged_magician);
