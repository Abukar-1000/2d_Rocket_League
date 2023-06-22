# GoalPost.js
<h1>This class encapsulates all the functionality required from a goal post.</h1>

## Private Attributes
* `backPost`: private attribute represents the back post.
* `topPost`: private attribute represents the top post.
* `bottomPost`: private attribute represents the bottom post.
* `goalType`: private attribute meant to be a flag for either left goal post or right goal post.
* `minChange`: private float attribute meant to set dy to a minimum value. 
* `player1`: private refference to player 1 on the heap.
* `player2`: private refference to player 2 on the heap.
* `scene`: private refference to the scene on the heap.
* `ball`: private refference to the ball on the heap.

## Private Methods

### `initializeNet()`
* Place the goal on screen based on if the goal is a left goal or a right goal.

### `recenterPlayers()`
* Resets the players positions when a goal is scored.

### `stopGoalFromMoving()`
* Minimizes dx and dy to keep the goal stationary.

### `handleCollision( otherSprite )`
* Handles the collisions of various object with respect to the goal post on the screen.

## Public Methods
### `constructor( scene, player1, player2, ball, goalType )`
* Constructor responsiable for initializing the GoalPost instance.
* Binary tree like class which represents a goal post.
* Constructed with a left post, right post, and back post ( parent ) all are instances in this class.

### `update()`
* Updates the current state of the goal, so it can be responsive in game.
