# Car.js
<h1>This class controls and manages the players car movement and all associated functionality</h1>

## Private Attributes
* `keyboard`: private refference to the global keyboard object stored on the heap.
* `keyboardState`: private refference to the keyboard array of the keyboard object.
* `playerType`: private flag to represent if this is player 1 or player 2. 
* `goalsScored`: private integer to keep track of goals scored.


## Public Methods

### `constructor( scene, image, width, height, keyboard, playerType )`
* Constructor responsiable for initializing the Car instance.

### `control()`
* Controls an instance of the Car class.
* Controls change based on whether we are controling and instance of player 1 or player 2.

### `incrementGoalScored()`
* Increments the goal tally when a player scores a goal.

### `getGoalsScored()`
* Returns the ammount of goals this player scores. Meant for keeping update the score board.

### `getPlayerType()`
* Returns whether this is player 1 or player 2.