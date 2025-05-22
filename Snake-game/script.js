let blockSize = 25;
let total_row = 17; // Total row number
let total_col = 17; // Total column number
let board;
let context;

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let speedX = 0; // Speed of snake in X coordinate.
let speedY = 0; // Speed of snake in Y coordinate.

let snakeBody = [];

let foodX;
let foodY;

let gameOver = false;

window.onload = function () {
  board = document.getElementById("board");
  board.height = total_row * blockSize;
  board.width = total_col * blockSize;
  context = board.getContext("2d");

  placeFood();
  document.addEventListener("keyup", changeDirection);
  setInterval(update, 1000 / 10);
};

function update() {
  if (gameOver) return;

  context.fillStyle = "green";
  context.fillRect(0, 0, board.width, board.height);

  // Draw food
  context.fillStyle = "yellow";
  context.fillRect(foodX, foodY, blockSize, blockSize);

  // Check if snake eats food
  if (snakeX === foodX && snakeY === foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
  }

  // Move the snake body
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  // Update snake position
  snakeX += speedX * blockSize;
  snakeY += speedY * blockSize;

  // Draw snake
  context.fillStyle = "white";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);
  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
  }

  // Check game over conditions
  if (
    snakeX < 0 ||
    snakeX >= total_col * blockSize ||
    snakeY < 0 ||
    snakeY >= total_row * blockSize
  ) {
    gameOver = true;
    endGame();
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
      gameOver = true;
      endGame();
    }
  }
}

function changeDirection(e) {
  if (e.code === "ArrowUp" && speedY !== 1) {
    speedX = 0;
    speedY = -1;
  } else if (e.code === "ArrowDown" && speedY !== -1) {
    speedX = 0;
    speedY = 1;
  } else if (e.code === "ArrowLeft" && speedX !== 1) {
    speedX = -1;
    speedY = 0;
  } else if (e.code === "ArrowRight" && speedX !== -1) {
    speedX = 1;
    speedY = 0;
  }
}

function placeFood() {
  foodX = Math.floor(Math.random() * total_col) * blockSize;
  foodY = Math.floor(Math.random() * total_row) * blockSize;
}

function endGame() {
    alert("Game Over! Press OK to restart.");
    restartGame();
  }
  
  function restartGame() {
    // Reset game variables
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    speedX = 0;
    speedY = 0;
    snakeBody = [];
    gameOver = false;
    placeFood();
  }