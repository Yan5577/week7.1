// sample usage:
// node src/app.js --action=add --m1 "the longest day" --m2 casablanca --m3 "spiderman"

const yargs = require('yargs');
const Movie = require("./utils")

const input = yargs.argv;

function app(yargsObject) {
    if (yargsObject.add) {
        const newMovie = new Movie(yargsObject.title, yargsObject.actor)
        newMovie.add();
    } else if (yargsObject.multiadd) {
        const newMovie1 = new Movie(yargsObject.title1, yargsObject.actor1)
        newMovie1.add();
        const newMovie2 = new Movie(yargsObject.title2, yargsObject.actor2)
        newMovie2.add();
        const newMovie3 = new Movie(yargsObject.title3, yargsObject.actor3)
        newMovie3.add();
    }
}

app(input);








// const yargs = require("yargs");
// const input = yargs(process.argv);
// const movie = require("./utils");
// const params = input.argv;

// movie(params.action, params.m1, params.m2, params.m3);
