// sample usage:
// node src/app.js --action=add --m1 "the longest day" --m2 casablanca --m3 "spiderman"


const yargs = require("yargs");
const input = yargs(process.argv);
const movie = require("./utils");
const params = input.argv;

movie(params.action, params.m1, params.m2, params.m3);
