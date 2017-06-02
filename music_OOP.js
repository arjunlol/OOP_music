
class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }
//calculate the rating by averaging the rating of its tracks
  overallRating() {
    let sumRating = 0;
    let avgRating = 0;
    this.tracks.forEach((track) => {
      sumRating += track.rating;
    })
    avgRating = sumRating/this.tracks.length;
    return avgRating;
  }
//sum the duration of all of its tracks
  totalDuration() {
    let sumDuration = 0;
    this.tracks.forEach((track) => {
      sumDuration += track.length;
    })
    return sumDuration;
  }

  addTrack(track) {
    this.tracks.push(track);
  }


}

// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds)
class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
  addPlaylist(playlist) {
    this.playlists.push(playlist)
//add playlist to add playlist object to library
  }
}

const track = new Track('Arjun', 3, 200);
const track2 = new Track('Bill', 5, 200);

const playlist = new Playlist("Arjun's hits")
const library = new Library("Arjun's Library", "Arjun")
playlist.addTrack(track);
playlist.addTrack(track2);
library.addPlaylist(playlist);
console.log(playlist);
console.log(playlist.overallRating());
console.log(playlist.totalDuration());
console.log(library);
