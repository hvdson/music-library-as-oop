function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlists(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

const myLibrary = new Library('dank library', 'i made dis');
const myPlaylist = new Playlists('Dank playlist');
const myTrack = new Track('Dank Track', 5, 150);


console.log(myLibrary);
console.log(myPlaylist);
console.log(myTrack);