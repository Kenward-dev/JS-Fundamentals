const { argv } = require("process");
const num = parseInt(argv[2], 10);

if (isNaN(num)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < num; i++) {
    console.log("X".repeat(num));
  }
}
