const fs = require("fs").promises;

async function parseInput(file) {
  const content = await fs.readFile(file, "utf8");
  return content.split(/[\r\n]+/).map((move) => move.split(" "));
}

async function start() {
  let depth = 0;
  let position = 0;
  let aim = 0;
  const moves = await parseInput("./2/2_a.txt");
  for (const move of moves) {
    switch (move[0]) {
      case "down":
        aim += Number(move[1]);
        break;
      case "up":
        aim -= Number(move[1]);

        break;
      case "forward":
        position += Number(move[1]);
        depth += aim * Number(move[1]);
        break;
    }
  }
  console.log(position * depth);
}

start();
// 1960569556
