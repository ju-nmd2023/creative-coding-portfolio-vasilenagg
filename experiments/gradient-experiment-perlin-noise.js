let r;
let g;
let b;

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(100);
}

const size = 2;
const divider = 8;
const numRows = innerWidth;
const numCols = innerHeight;

let counter = 0;

function draw() {
  background(r + 15, g + 11, b + 20);

  r = random(155, 87);
  g = random(64, 102);
  b = random(173, 92);

  stroke(r, g, b);
  fill(r, g, b);

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider) * size;
      rect(size / 2 + x * size, size / 2 + y * size, value);
    }
  }
  counter += 0.05;
}
