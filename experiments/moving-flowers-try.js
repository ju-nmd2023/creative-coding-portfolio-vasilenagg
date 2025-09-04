function setup() {
  createCanvas(innerWidth, innerHeight);
  background(217, 175, 50);
}

let flowerSize = 20;
let amount = 5;
let gap = 140;

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
      rect(x, y, 3);

      rotate(PI / 7);
    }
  }
}

function draw() {
  fill(189, 157, 19);
  noStroke();
  // Code borrowed from a website - BEGIN
  //Source: noise. (n.d.). https://p5js.org/reference/p5/noise/
  let u = 100 * noise(0.005 * frameCount);
  let v = 100 * noise(0.005 * frameCount + 10000);

  //noiseSeed(0);
  let y = (height - flowerSize * amount - gap * (amount - 1)) / 2;
  for (i = 0; i < amount; i++) {
    let x = (width - flowerSize * amount - gap * (amount - 1)) / 2;
    for (let j = 0; j < amount; j++) {
      push();
      translate(x, y);
      flower();
      pop();
      x += flowerSize + gap + u * 0.1;
    }
    y += flowerSize + gap + v * 0.1;
  }
  // Code borrowed from a website - END
}
