"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people 
// you’d like to invite to dinner. Then use your list to print a message 
// to each person, inviting them to dinner.
let guestList = ["Daniyal", "Umer", "Ali"];
guestList.forEach(person => {
    console.log(`hello ${person} you are invited to dinner.`);
});
console.log(`\n \n \n`);
//loop
for (let i = 0; i < guestList.length; i++) {
    console.log(`hello ${guestList[i]} you are invited to dinner.`);
}
