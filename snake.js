const gameBoard = document.getElementById("game-board");

var boxSize = 30;
var boardWidth = 20;
var boardHeight = 20;
var context;
var foodX, foodY;
var dx = 0,
  dy = 0;
var snakeHX = 10 * boxSize,
  snakeHY = 10 * boxSize;
var snakeTail = [];
var gameIsOver;
function init() {
  gameIsOver = false;
  gameBoard.height = boardWidth * boxSize;
  gameBoard.width = boardWidth * boxSize;
  context = gameBoard.getContext("2d");
  document.addEventListener("keyup", changeDirectionHandler);
  generateFood();
  setInterval(update, 1000 / 10);
}

function update() {
  if (gameIsOver) return;
  context.fillStyle = "black";
  context.fillRect(0, 0, boardWidth * boxSize, boardHeight * boxSize);
  context.fillStyle = "rgb(147, 147, 159)";
  context.fillRect(0, 0, boardWidth * boxSize, boxSize);
  context.fillRect(0, 0, boxSize, boardHeight * boxSize);
  context.fillRect(
    0,
    (boardHeight - 1) * boxSize,
    boardWidth * boxSize,
    boxSize
  );
  context.fillRect(
    (boardWidth - 1) * boxSize,
    0,
    boxSize,
    boardWidth * boxSize
  );
  for (let i = snakeTail.length - 1; i > 0; i--) {
    snakeTail[i] = snakeTail[i - 1];
  }
  if (snakeTail.length) {
    snakeTail[0] = [snakeHX, snakeHY];
  }
  if (snakeHX == foodX && snakeHY == foodY) {
    snakeTail.push([foodX, foodY]);
    generateFood();
  }

  snakeHX += dx * boxSize;
  snakeHY += dy * boxSize;

  context.fillStyle = "red";
  context.fillRect(foodX, foodY, boxSize, boxSize);
  context.fillStyle = "green";
  context.fillRect(snakeHX, snakeHY, boxSize, boxSize);
  for (let i = 0; i < snakeTail.length; i++) {
    context.fillRect(snakeTail[i][0], snakeTail[i][1], boxSize, boxSize);
  }
  if (
    snakeHX == 0 ||
    snakeHY == 0 ||
    snakeHX == (boardHeight - 1) * boxSize ||
    snakeHY == (boardHeight - 1) * boxSize
  ) {
    gameIsOver = true;
    alert("Game is Over");
  }
  for (let i = 0; i < snakeTail.length; i++) {
    if (snakeHX == snakeTail[i][0] && snakeHY == snakeTail[i][1]) {
      gameIsOver = true;
      alert("Game is Over");
    }
  }
}

function generateFood() {
  let x = Math.floor(Math.random() * boardWidth);
  let y = Math.floor(Math.random() * boardHeight);
  if (x > 0 && y > 0 && x < boardWidth - 1 && y < boardHeight - 1) {
    foodX = x * boxSize;
    foodY = y * boxSize;
  } else {
    generateFood();
  }
}
function changeDirectionHandler(e) {
  if (e.code == "KeyW" && dy != 1) {
    dx = 0;
    dy = -1;
  } else if (e.code == "KeyS" && dy != -1) {
    dx = 0;
    dy = 1;
  } else if (e.code == "KeyA" && dx != 1) {
    dx = -1;
    dy = 0;
  } else if (e.code == "KeyD" && dx != -1) {
    dx = 1;
    dy = 0;
  }
}
init();
