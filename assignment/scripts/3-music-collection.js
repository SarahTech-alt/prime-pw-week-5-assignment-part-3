console.log('***** Music Collection *****');

//Creating an array to hold the collection
let collection = [];

// First approach to a function that adds items to the collection

function addToCollection (title,artist,yearPublished){
  collection.push(collection.title = title);
  collection.push(collection.artist = artist);
  collection.push(collection.yearPublished = yearPublished);
}

addToCollection('Who',"What",98);
addToCollection("The Bobs","Yeahness", 67);
console.log(collection);


/* Second approach to a function that adds items to the collection

  function addToCollection(title,artist,yearPublished){
  collection = {
    title:title,
    artist:artist,
    yearPublished:yearPublished
  };
}

addToCollection('Who',"What",98);
addToCollection("The Bobs","Yeahness", 67);
console.log(collection);
*/


//Created a function to add items to the collection

function addToCollection(a,b,c){
  collection.title = collection.push(a);
  collection.artist = collection.push(b);
  collection.yearPublished = collection.push(c);
  return collection;
}

addToCollection('Who',"What",98);
addToCollection("The Bobs","Yeahness", 67);
console.log(collection);
