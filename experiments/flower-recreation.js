function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
  colorMode(HSB);
}

let flowerSize = 20;
let amount = 4;
let gap = 90;

function flower() {
  noStroke();
  let petals = 5;

  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      fill(136, 204, 4);
      rect(x, y, 40, 5);

      fill(14, 24, 100);
      rect(x, y, 20, 15);

      fill(255, 155, 130);
      ellipse(x, y, 3);

      rotate(PI / 5);
    }
  }
}

function draw() {
  let y = (height - flowerSize * amount - gap * (amount - 1)) / 2;
  for (i = 0; i < amount; i++) {
    let x = (width - flowerSize * amount - gap * (amount - 1)) / 2;
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
