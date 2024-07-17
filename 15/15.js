"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of 
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestList = ["Daniyal", "Umer", "Ali"];
guestList.forEach(person => {
    console.log(`hello ${person} you are invited to dinner.`);
});
console.log(`\n Dew to some reason ${guestList[1]} will not come on my dinner\n`);
guestList[1] = "Bilal";
guestList.forEach(person => {
    console.log(`\n hello ${person} you are invited to dinner. \n`);
});
