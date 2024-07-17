// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your 
// program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new 
// guest to the end of your list. • Print a new set of invitation messages, 
// one for each person in your list.


let guestList : string[] = ["Daniyal", "Umer", "Ali"]

guestList.forEach(person =>{
    console.log(`hello ${person} you are invited to dinner.`);
    
})    

console.log(`\n Dew to some reason ${guestList[1]} will not come on my dinner\n`);


guestList[1] = "Bilal"

guestList.forEach(person =>{
    console.log(`hello ${person} you are invited to dinner.`);
    
}) 

console.log(`\n\nGOOD NEWS! we have arrange a big dinner table we invite 3 more guest. \n Thank You\n\n`);

guestList.unshift("Arsalan");
guestList.splice(2,0,"Azlan");
guestList.push("Rayyan");

guestList.forEach(person =>{
    console.log(`hello ${person} you are invited to dinner.\n`);
    
}) 
