# Snake Game
This is a simple implementation of the classic snake game using HTML, CSS, and JavaScript.

## How to Play
The objective of the game is to guide the snake to eat the food that randomly appears on 
the game board while avoiding the walls and its own tail. Use the arrow keys or the W, A, S, D keys to change the direction of the snake.

## Code Explanation
### HTML
The game board is represented by a canvas element with the ID "game-board". The canvas element is styled with CSS to have a border and a margin.

### CSS
The canvas element is given a border and a margin to make it easier to see and position on the page
### JS
Variables:
 - gameBoard: A reference to the canvas element in the HTML file.
 - boxSize: The size of each square on the game board, in pixels.
 - boardWidth: The width of the game board, in squares.
 - boardHeight: The height of the game board, in squares.
 - context: A reference to the 2D context of the canvas element.
 - foodX, foodY: The coordinates of the current food on the game board.
 - dx, dy: The current direction of the snake.
 - snakeHX, snakeHY: The coordinates of the head of the snake.
 - snakeTail: An array of coordinates representing the tail of the snake.
 - gameIsOver: A boolean flag indicating whether the game is over.
