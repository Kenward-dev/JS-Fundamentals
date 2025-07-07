const { argv } = require('process');

let num1 = parseInt(argv[2], 10);
let num2 = parseInt(argv[3], 10);

function add(a, b) {
    if (isNaN(a) || isNaN(b)) {
        console.log("NaN");
    }
    else {
        console.log(a + b);
    }
}

add(num1, num2);