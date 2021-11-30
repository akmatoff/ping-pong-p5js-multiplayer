/* eslint-disable no-undef, no-unused-vars */

const socket = io("http://localhost:5000")

socket.on('gameState', updateGameState)

var puck;
var player;
var gate1;
var gate2;
var gateHeight;
var gateWidth;
var fieldWidth;
var fieldHeight;

var teamScore1 = 0;
var teamScore2 = 0;

var mouseSpeed = 0;

var gameState = {}

function setup() {
  fieldWidth = windowWidth - 30;
  fieldHeight = windowHeight - 30;

  createCanvas(fieldWidth, fieldHeight);
  noCursor();

  gateHeight = 280;
  gateWidth = 15;
  gate1 = new Gate(0, fieldHeight / 2 - gateHeight / 2, gateWidth, gateHeight);
  gate2 = new Gate(
    fieldWidth - gateWidth,
    fieldHeight / 2 - gateHeight / 2,
    gateWidth,
    gateHeight
  );
  puck = new Puck(fieldWidth / 2, fieldHeight / 2, 40);
  player = new Player(150, fieldHeight / 2, 65);
}

function draw() {
  background("#599460");

  gate1.draw();
  gate2.draw();
  puck.draw();
  player.draw();

  // gate1.checkCollision(puck);
  gate2.checkCollision(puck);
  puck.checkBoundaryCollision();
  player.checkBoundaryCollision();
  player.checkCollision(puck);

  mouseSpeed = abs(mouseX - pmouseX) + 2;
}

windowResized = function () {
  fieldWidth = windowWidth - 30;
  fieldHeight = windowHeight - 30;
  resizeCanvas(fieldWidth, fieldHeight);
};

function updateGameState(gameState) {
  gameState = gameState;
}