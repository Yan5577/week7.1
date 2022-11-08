
const movieArray = [];

class Movie {
    constructor (title, actor="Not Specified") {
        this.title = title;
        this.actor = actor;
    }
    add() {
        movieArray.push(this);
        console.table(movieArray);
    }
}

module.exports = Movie;










// const yargs = require("yargs");

// function movie(action, m1, m2, m3) {
//   switch (action) {
//     case "add":
//       const movie = [m1, m2, m3];
//       console.table(movie);
//       break;
//     default:
//       console.log("Command not recognised");
//   }
// }
// module.exports = movie;
