const fs = require("fs").promises;

async function readfile(file) {
  const content = await fs.readFile(file, "utf8");
  return content.split("\n").map(Number);
}

async function start() {
  let counter = 0;
  const depth = await readfile("1/1_a.txt");
  let last_height = depth.shift();

  for (const height of depth) {
    if (height > last_height) counter++;

    last_height = height;
  }
  console.log(counter);
}

start();
// 1527
