console.log('***** Music Collection *****');

//Create a variable `collection` that starts as an empty array

collection = [];


// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object

function addToCollection( title, artist, yearPublished ){
  const album = { //created an object to store properties
  title: title, //created a property called title for the album that will equal the 'title' input
  artist: artist, //created a property called artist for the album that will equal the 'artist' input
  yearPublished: yearPublished //created a property called yearPublished for the album that will equal the 'yearPublished' input
  };
  collection.push(album); //adding album to the end of the collection array
  return album; //returning album
}

// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.

console.log(addToCollection('Who', "What", 2012)); //adding album to collection
console.log(addToCollection("The Bobs", "Yeahness", 1967)); //adding album to collection
console.log(addToCollection("The Weevels", "Dancies", 2009)); //adding album to collection
console.log(addToCollection("Radical Singing", "The Singers", 2012)); //adding album to collection
console.log(addToCollection("Our First Album", "Newbs", 2018)); //adding album to collection
console.log(addToCollection("The Weevels 2", "Dancies", 2013)); //added an album with the same artist as another album

console.log(collection); // this shows array with added objects


// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection( collectionName ){ //creating function to take the collection name as an input
  console.log(collectionName.length); //logging the number of items in the collection
  for (let i=0; i<collectionName.length; i++){ //intializing loop
    console.log(`${collectionName[i].title} by ${collectionName[i].artist} published in ${collectionName[i].yearPublished}`); //outputing requested information
  }
}

showCollection(collection); //running the show collection function on our collection array


//Assigned function to push artists searched for into an array if they exits in the collection
function findByArtist2( artist ){ //initializing function to input artist to search for
  let listofArtists = []; //initializing empty array to hold results
  for (let i=0; i<collection.length; i++){ //initializing loop
    if (artist === collection[i].artist){ //checking each object of the collection with the attribute artist to check for matches
      listofArtists.push(collection[i]); //adding matches to the array created within the function
    }
  }
 return listofArtists; //returns the array with listed artists if any were found, if not returns an empty array
}

console.log(findByArtist2('Dancies')); //should return an array with two objects with the same artist
console.log(findByArtist2('What')); //should return an array with one object of the artist
console.log(findByArtist2('The White Stripes')); //this is not in the collection, should return empty array

//Second approach to assigned function
function  findByArtist3( artist ){
  let listofArtists = []; //create empty array to hold results
  for (let items of collection){ //for each item (object) in the collection
    //console.log(collection); //verifying loop is correct
    if (items.artist === artist){ //if the first item's artist attribute matches the inputted artist
      listofArtists.push(items); //add to the end of the new array
    }
  }
  return listofArtists; //return the array with matches or empty if there was no match
}

console.log(findByArtist3('Dancies')); //should return an array with two instances of the artist
console.log(findByArtist3('What')); //should return an array with one object of the artist
console.log(findByArtist3('The White Stripes')); //this is not in the collection, should return empty array

//STRETCH GOALS
// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

function search( artist, year){
  if (typeof artist === "undefined" || typeof year === "undefined"){
    return collection; //if a parameter is not entered returns the collection
  }
  collectionMatch = []; //empty array to hold results
  for (let items of collection){ //loops through items in the collection
    if (items.artist === artist && items.year === year){ //checks if both the artist and the year match
      collectionMatch.push(items); //if match found adds to collectionMatch array
    }
  } return collectionMatch; //returns empty array if matching album is not found, otherwise adds to the collectionMatch array
}

console.log(search('The Whos', 19)); //album year does not match, returns empty array
console.log(search('The Whos')); //missing search parameter input, returns collection
console.log(search("Dancies", 2013)); //both parameters match, contains the album found


// Stretch goal #3. Submitting for now, not complete

// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```
let stretchGoalCollection = [];

function addToStretchCollection( title, artist, yearPublished, tracks ){
  const album = { //created an object to store properties
  title: title, //created a property called title for the album that will equal the 'title' input
  artist: artist, //created a property called artist for the album that will equal the 'artist' input
  yearPublished: yearPublished,
  tracks: tracks //created a property called yearPublished for the album that will equal the 'yearPublished' input
  };
  stretchGoalCollection.push(album); //adding album to the end of the collection array
  return album; //returning album
}

console.log(addToStretchCollection('Title', 'Artist', 1952, [{name: 'First Song', duration: '24:38'}, {name: 'Second Song', duration: '3:42'}]));
console.log(addToStretchCollection('Title 2', 'Artist 2', 1942, [{name: 'My Song', duration: '12:38'}, {name: 'My Song 2', duration: '7:42'}]));
console.log(addToStretchCollection('Album Title 3', 'Artist Name 3', 2002, [{name: 'My Tune', duration: '0:38'}, {name: 'My Tune 2', duration: '1:42'}]));


function showStretchCollection( collectionName ){
  for (let album of collectionName){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}:`); //logs the information for each item in colleciton
    //console.log(album.tracks.length); //checking
   for (let i=0; i<album.tracks.length; i++){ //initializing loop for items of tracks array for each album in colleciton
     //console.log(`This is loop ${i}`); //checking loop execution
     let trackName = album.tracks[i].name; //checking call is correct
     let trackLength = album.tracks[i].duration;
     console.log(` ${i+1}. ${trackName}: ${trackLength}`); //logs track number, name of track and duration of track for each track within album of collection
   }
  }
}

showStretchCollection(stretchGoalCollection);
