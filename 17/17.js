"use strict";
// Shrinking Guest List: You just found out that your new dinner 
// table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a 
// message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain 
// in your list. Each time you pop a name from your list, print a message 
// to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting
//  them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.
let guestList = ["Daniyal", "Umer", "Ali"];
guestList.forEach(person => {
    console.log(`hello ${person} you are invited to dinner.`);
});
console.log(`\n Dew to some reason ${guestList[1]} will not come on my dinner\n`);
guestList[1] = "Bilal";
guestList.forEach(person => {
    console.log(`hello ${person} you are invited to dinner.`);
});
console.log(`\n\nGOOD NEWS! we have arrange a big dinner table we invite 3 more guest. \n Thank You\n\n`);
guestList.unshift("Arsalan");
guestList.splice(2, 0, "Azlan");
guestList.push("Rayyan");
guestList.forEach(person => {
    console.log(`hello ${person} you are invited to dinner.\n`);
});
console.log(`\n Sorry we cant arrange big table, only 2 person will be invited. \n`);
console.log(`Mr. ${guestList[5]}, you are not invited to dinner`);
console.log(`Mr. ${guestList[4]}, you are not invited to dinner`);
console.log(`Mr. ${guestList[3]}, you are not invited to dinner`);
console.log(`Mr. ${guestList[2]}, you are not invited to dinner \n \n `);
guestList.pop();
guestList.pop();
guestList.pop();
guestList.pop();
console.log(`Mr. ${guestList[0]}, you are still invited to dinner`);
console.log(`Mr. ${guestList[1]}, you are still invited to dinner`);
guestList.pop();
guestList.pop();
console.log(guestList);
