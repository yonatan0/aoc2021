const fs = require("fs").promises;

async function parseBinaries(file) {
  const content = await fs.readFile(file, "utf8");
  return content.split(/[\r\n]+/).map((bits) => bits.split(""));
}

async function oxygen() {
  let binaries = await parseBinaries("./3/3_a.txt");
  const length = binaries[0].length;
  let bit = 0;
  while (binaries.length !== 1) {
    let total0 = 0;
    let total1 = 0;
    for (let i = 0; i < binaries.length; i++) {
      if (binaries[i][bit] === "1") {
        total1++;
      } else {
        total0++;
      }
    }
    if (total1 >= total0) {
      binaries = binaries.filter((bits) => bits[bit] === "1");
    } else {
      binaries = binaries.filter((bits) => bits[bit] === "0");
    }
    bit++;
  }
  console.log("oxygen", binaries[0], parseInt(binaries[0].join(""), 2));
  return parseInt(binaries[0].join(""), 2);
}

async function co2() {
  let binaries = await parseBinaries("./3/3_a.txt");
  const length = binaries[0].length;
  let bit = 0;
  while (binaries.length !== 1) {
    let total0 = 0;
    let total1 = 0;
    for (let i = 0; i < binaries.length; i++) {
      if (binaries[i][bit] === "1") {
        total1++;
      }
      if (binaries[i][bit] === "0") {
        total0++;
      }
    }
    if (total1 >= total0) {
      binaries = binaries.filter((bits) => bits[bit] === "0");
    } else {
      binaries = binaries.filter((bits) => bits[bit] === "1");
    }
    bit++;
  }
  console.log("co2", binaries[0], parseInt(binaries[0].join(""), 2));
  return parseInt(binaries[0].join(""), 2);
}
async function start() {
  let o = await oxygen();
  let c = await co2();

  console.log("o*c", o, c, o * c);
}
start();
// 4432698
