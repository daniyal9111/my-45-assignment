// Stripping Names: Store a person’s name, and include some whitespace characters at 
// the beginning and end of the name. Make sure you use each character combination, 
// "\t" and "\n", at least once. Print the name once, so the whitespace around the
//  name is displayed. Then print the name after striping the white spaces.


let userName : string = "         \n\t Daniyal Hanif\t\n          "

console.log(userName);

let without_whitespace: string = userName.trim();

console.log(userName.trim());

 