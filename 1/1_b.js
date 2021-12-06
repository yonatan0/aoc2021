const fs = require("fs").promises;

async function readfile(file) {
  const content = await fs.readFile(file, "utf8");
  return content.split("\n").map(Number);
}

async function start() {
  let counter = 0;
  const depth = await readfile("1/1_a.txt");
  let a = depth[0] + depth[1] + depth[2];

  for (let i = 0; i < depth.length - 2; i++) {
    const b = depth[i + 1] + depth[i + 2] + depth[i + 3];
    if (b > a) {
      counter++;
    }
    a = b;
  }
  console.log(counter);
}

start();
// 1575
