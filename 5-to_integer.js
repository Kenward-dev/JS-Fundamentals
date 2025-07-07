const { argv } = require('process');

const input = argv[2];
const num = parseInt(input, 10);

if (isNaN(argv[2])) {
    console.log("Not a number");
} else {
    console.log("My number: " + num);
}