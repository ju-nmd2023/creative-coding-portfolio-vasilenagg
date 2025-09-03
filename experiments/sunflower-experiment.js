function setup() {
  createCanvas(innerWidth, innerHeight);
  background(217, 175, 50);
}

let flowerSize = 50;
let amount = 8;
let gap = 90;

function flower() {
  noStroke();
  let petals = 19;

  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      fill(123, 90, 22);
      rect(x, y, 40, 5);

      fill(184, 148, 27);
      rect(x, y, 20, 15);

      fill(168, 168, 57);
      ellipse(x, y, 3);

      rotate(PI / 7);
    }
  }
}

function draw() {
  let y = (height - flowerSize * amount - gap * (amount - 2)) / 2;
  for (i = 0; i < amount; i++) {
    let x = (width - flowerSize * amount - gap * (amount - 4)) / 2;
    for (let j = 0; j < amount; j++) {
      push();
      translate(x, y);
      flower();
      pop();
      x += flowerSize + gap;
    }
    y += flowerSize + gap;
  }
}
