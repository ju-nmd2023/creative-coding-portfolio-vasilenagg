function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10);
}

const size = 10;
const divider = 4;
const numRows = innerWidth;
const numCols = innerHeight;

let counter = 0;

function draw() {
  background(121, 138, 166);
  stroke(184, 197, 247, 0.8);
  fill(184, 197, 217);

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider, counter) * size;
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }

  counter += 1;
}
