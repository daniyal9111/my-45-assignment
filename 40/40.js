"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, 
// and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.
function make_album(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let musicAlbum1 = make_album("Ahmed Jahanzeb", "Tera Mera Pyar Amar");
let musicAlbum2 = make_album("Ali Sethi", "Pasoori");
let musicAlbum3 = make_album("Kaifi Khalil", "Kahani Meri");
console.log(musicAlbum1);
console.log(musicAlbum2);
console.log(musicAlbum3);
function make_album_New(artistName, albumTitle, NumOfTracks) {
    return { artistName, albumTitle, NumOfTracks };
}
let musicAlbum4 = make_album_New("Ahmed Jahanzeb", "Tera Mera Pyar Amar", 3);
let musicAlbum5 = make_album_New("Ali Sethi", "Pasoori", 5);
let musicAlbum6 = make_album_New("Kaifi Khalil", "Kahani Meri");
console.log(musicAlbum4);
console.log(musicAlbum5);
console.log(musicAlbum6);
