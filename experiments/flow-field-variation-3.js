class Agent {
  constructor(x, y, maxSpeed, maxForce) {
    this.position = createVector(x, y);
    this.lastPosition = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.maxSpeed = maxSpeed;
    this.maxForce = maxForce;
  }

  follow(desiredDirection) {
    desiredDirection = desiredDirection.copy();
    desiredDirection.mult(this.maxSpeed);
    let steer = p5.Vector.sub(desiredDirection, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.lastPosition = this.position.copy();
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0.1);
  }

  checkBorders() {
    if (this.position.x < 0) {
      this.position.x = innerWidth;
      this.lastPosition.x = innerWidth;
    } else if (this.position.x > innerWidth) {
      this.position.x = 0;
      this.lastPosition.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = innerHeight;
      this.lastPosition.y = innerHeight;
    } else if (this.position.y > innerHeight - 0) {
      this.position.y = 0;
      this.lastPosition.y = 0;
    }
  }

  draw() {
    push();
    strokeWeight(0.5);

    stroke(random(40, 255), 133, 102, random(40, 255));
    line(
      this.lastPosition.x,
      this.lastPosition.y,
      this.position.x,
      this.position.y
    );
    pop();
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  //angleMode(DEGREES);
  background(255);

  field = generateField();

  generateAgents();
}

function generateField() {
  let field = [];
  noiseSeed(Math.random() * 10);
  for (let x = 0; x < maxCols; x++) {
    field.push([]);
    for (let y = 0; y < maxRows; y++) {
      const value = noise(x / divider, y / divider) * Math.PI * 2;
      field[x].push(p5.Vector.fromAngle(value));
    }
  }
  return field;
}

function generateAgents() {
  for (let i = 0; i < 520; i++) {
    let agent = new Agent(
      Math.random() * innerWidth,
      Math.random() * innerHeight,
      4,
      0.4
    );
    agents.push(agent);
  }
}

const fieldSize = 50;
const maxCols = Math.ceil(innerWidth / fieldSize);
const maxRows = Math.ceil(innerHeight / fieldSize);
const divider = 2;
let field;
let agents = [];

function draw() {
  //rotate(90);
  //translate(0, -width);

  for (let agent of agents) {
    const x = Math.floor(agent.position.x / fieldSize);
    const y = Math.floor(agent.position.y / fieldSize);
    const desiredDirection = field[x][y];
    agent.follow(desiredDirection);
    agent.update();
    agent.checkBorders();
    agent.draw();
  }
}

function draw() {
  for (let agent of agents) {
    const x = Math.floor(agent.position.x / fieldSize);
    const y = Math.floor(agent.position.y / fieldSize);

    // Code borrowed from a website - BEGIN
    //Source: ChatGPT - Seek mouse interaction. (2025). ChatGPT. https://chatgpt.com/share/68c2f6dd-41cc-800a-8c8f-a69230b29df9
    let desiredDirection = field[x][y].copy();

    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
      let toMouse = createVector(
        mouseX - agent.position.x,
        mouseY - agent.position.y
      );
      toMouse.normalize();

      desiredDirection = p5.Vector.lerp(desiredDirection, toMouse, 0.5);
    }
    // Code borrowed from a website - END

    agent.follow(desiredDirection);
    agent.update();
    agent.checkBorders();
    agent.draw();
  }
}
