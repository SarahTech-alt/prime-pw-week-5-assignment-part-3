console.log('***** Music Collection *****');

//cleaned up version of the 7th attempt that did what is asked for. The other attempts are shown below.

collection = [];


function addToCollection(title,artist,yearPublished){
  const album = { //created an empty object to store properties
  title: title, //created a property called title for the album that will equal the 'title' input
  artist: artist, //created a property called artist for the album that will equal the 'artist' input
  yearPublished: yearPublished //created a property called yearPublished for the album that will equal the 'yearPublished' input
  };
  collection.push(album);
  return album;
}

addToCollection('Who', "What", 1998); //adding album to collection
addToCollection("The Bobs", "Yeahness", 1967); //adding album to collection
addToCollection("The Weevels", "Dancies", 2009); //adding album to collection
addToCollection("Radical Singing", "The Singers", 2012); //adding album to collection
addToCollection("Our First Album", "Newbs", 2018); //adding album to collection


console.log(collection); // this shows array with second album twice
console.log(collection[1].title); //this shows the title of the second album
console.log(collection[0].title); //this shows the title of the first album







/*
//Creating an array to hold the collection
let collection1 = [];

// First attempt

function addToCollection1 (title,artist,yearPublished){
  collection1.push(collection1.title = title);
  collection1.push(collection1.artist = artist);
  collection1.push(collection1.yearPublished = yearPublished);
  return collection1;
}

addToCollection1('Who',"What",98); //adding first album to collection1
addToCollection1("The Bobs","Yeahness", 67); //adding second album to collection1
console.log(collection1); //returns array of an object with properties
console.log(collection1.title); //returns the title of the second album added


//Second attempt
let collection2 = [];

  function addToCollection2(title,artist,yearPublished){
  collection2 = {
    title:title,
    artist:artist,
    yearPublished:yearPublished
  };
  return collection2;
}

addToCollection2('Who',"What",98); //adding first album to collection2
addToCollection2("The Bobs","Yeahness", 67); //adding second album to collection2
console.log(collection2); //returns object with properties, only includes last addition


//Third attempt
let collection3 = [];

function addToCollection3(a,b,c){
  collection3.title = collection3.push(a);
  collection3.artist = collection3.push(b);
  collection3.yearPublished = collection3.push(c);
  return collection3;
}

addToCollection3('Who',"What",98);
addToCollection3("The Bobs","Yeahness", 67);
console.log(collection3); //returns array with values added, lists properties as numbers
console.log(collection3.title); //returns the number 4

*/

/* Fourth attempt

let collection = [];
function addToCollection(a,b,c){
  collection.title = a;
  collection.albumName = b;
  collection.yearReleased = c;
  return collection.push(a,b,c);
}

addToCollection('Who',"What",98);
addToCollection("The Bobs","Yeahness", 67);
console.log(collection); //returns array with values added, lists properties as numbers
console.log(collection.title); //returns the number 4

//Checking for existence of first album

for (let i =0; i<collection.length; i++){
  console.log(`For loop number ${i} the value checked is ${collection.title[i]}`); //this shows is looping through letters, not full property names
  if (collection.title === "Who"){
    console.log('The album exists');
  }
  else {
    console.log('The album was not added to the collection');
  }
}
*/


/*
// Fifth attempt

//Created a new object within the function to add to the array, this is closer

let collection = []; //starts as empty array

function addToCollection(a, b, c){
  const album = { //creating new object
    title: a,
    artist: b,
    yearPublished: c
  };
  collection.push(album); //adding object to the end of collection
  return album; //returns album
}
console.log(collection.title);
console.log(addToCollection('Who',"What",98)); //logs adding first album to collection
console.log(addToCollection("The Bobs","Yeahness", 67)); //logs adding second album to collection
console.log(collection); // this shows array with multiple objects
//console.log(album.title); //Returns undefined

const keys = Object.keys(collection); //converting properties to an array that can be iterated over
const values = Object.values(collection); //converting values to an array that can be iterated over

console.log(values);
*/

/*

//sixth attempt

let collection = []; //creating empty array

function addToCollection(title,artist,yearPublished){
  const album = []; //creating empty object
  album.push({title,artist,yearPublished}); //adding inputs to album
  collection.push(album); //adding album to collection
  return album; //returning album
}

console.log(addToCollection('Who',"What",98)); //logs adding first album to collection
console.log(addToCollection("The Bobs","Yeahness", 67)); //logs adding second album to collection
console.log(collection); // this shows array with multiple objects
console.log(collection.title); //This is undefined
*/

/*
//seventh attempt...This is the one that does what I want ...
collection = [];


function addToCollection(title,artist,yearPublished){
  const album = {}; //created an empty object to store properties
  album.title = title; //created a property called title for the album that will equal the 'title' input
  album.artist = artist; //created a property called artist for the album that will equal the 'artist' input
  album.yearPublished = yearPublished; //created a property called yearPublished for the album that will equal the 'yearPublished' input
  collection.push(album);
  return album;
}

console.log(addToCollection('Who',"What",98)); //logs adding first album to collection
console.log(addToCollection("The Bobs","Yeahness", 67)); //logs adding second album to collection
console.log(collection); // this shows array with second album twice
console.log(collection[1].title); //this shows the title of the second album
console.log(collection[0].title); //this shows the title of the first album

//Testing to see if I can find a specific album title by iterating over the collection
for (let i =0; i < collection.length; i++){
  console.log(`For loop number ${i} the value checked is ${collection[i].title}`); //Logging each iteration to observe outcome
  if (collection[i].title === "The Bobs"){ //look to see if there is a title 'The Bobs'
    console.log('The album exists'); //There is so this is the output
  }
  else {
    console.log('The album was not added to the collection');
  }
}

*/
