const { argv } = require('process');

if (argv[2] && argv[3]) {
    console.log(`${argv[2]} is ${argv[3]}`);
} else if (argv[2] && !argv[3]) {
    console.log(`${argv[2]} is undefined`);
} else {
    console.log(`undefined is undefined`);
}