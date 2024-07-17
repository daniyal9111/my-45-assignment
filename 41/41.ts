// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.


let magicianNames: string[] = ['Ali','amir','adnan'];
 function show_magicians(){
    for(let i= 0; i<magicianNames.length; i++){
        console.log(`${magicianNames[i]}`);
    }
    return;
 }
 show_magicians();