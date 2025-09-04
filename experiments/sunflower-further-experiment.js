function setup() {
  createCanvas(innerWidth, innerHeight);
  background(217, 175, 50);

  stroke(94, 104, 0);
  strokeWeight(5);
  line(248, 218, 382, 775);
  line(248, 303, 382, 775);
  line(248, 393, 382, 775);
  line(360, 209, 382, 775);
  line(340, 209, 382, 775);
  line(370, 209, 382, 775);
  line(482, 209, 382, 775);
  line(492, 309, 382, 775);
  line(482, 399, 382, 775);
}

let flowerSize = 50;
let amount = 3;
let gap = 120;

function flower() {
  noStroke();
  let petals = 19;

  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      fill(48, 92, 57);
      rect(x, y, 44, 6);

      fill(123, 90, 22);
      rect(x, y, 40, 5);

      fill(184, 148, 27);
      rect(x, y, 20, 15);

      fill(79, 32, 57);
      rect(x, y, 3);

      rotate(PI / 6);
    }
  }
}

function draw() {
  fill(189, 157, 19);
  noStroke();
  rect(0, 600, 800, 300);

  let y = innerHeight / 2;
  for (i = 0; i < amount; i++) {
    let x = innerWidth / 2;
    for (let j = 0; j < amount; j++) {
      push();
      translate(x / 1.5, y / 2);
      flower();

      pop();
      x += flowerSize + gap;
    }
    y += flowerSize + gap;
  }
}
