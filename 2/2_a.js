const fs = require("fs").promises;

async function parseInput(file) {
  const content = await fs.readFile(file, "utf8");
  return content.split(/[\r\n]+/).map((move) => move.split(" "));
}

async function start() {
  let depth = 0;
  let position = 0;
  const moves = await parseInput("./2/2_a.txt");
  for (const move of moves) {
    switch (move[0]) {
      case "down":
        depth += Number(move[1]);
        break;
      case "up":
        depth -= Number(move[1]);
        break;
      case "forward":
        position += Number(move[1]);
        break;
    }
  }
  console.log(position * depth);
}

start();
// 1813801
