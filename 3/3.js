"use strict";
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
let person_Name = "daniyal";
console.log("Lowercase:" + person_Name.toLocaleLowerCase());
console.log("Uppercase:" + person_Name.toLocaleUpperCase());
let title_case = person_Name[0].toLocaleUpperCase() + person_Name.slice(1).toLocaleLowerCase();
console.log("titlecase: " + title_case);
