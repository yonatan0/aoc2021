const fs = require("fs").promises;

async function parseBinaries(file) {
  const content = await fs.readFile(file, "utf8");
  return content.split(/[\r\n]+/).map((bits) => bits.split(""));
}

async function start() {
  const binaries = await parseBinaries("./3/3_a.txt");
  const length = binaries[0].length;
  let gama = new Array(length).fill(0);
  let epsilon = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    let total0 = 0;
    let total1 = 0;
    for (let j = 0; j < binaries.length; j++) {
      if (binaries[j][i] === "1") {
        total1++;
      } else {
        total0++;
      }
    }
    if (total1 > total0) {
      gama[i] = 1;
    } else {
      epsilon[i] = 1;
    }
  }
  console.log(parseInt(gama.join(""), 2) * parseInt(epsilon.join(""), 2));
}

start();
// 3374136
