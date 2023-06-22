# Mouse.js
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

### `constructor( scene, player1, player2, ball, goalType )`
* Constructor responsiable for initializing the GoalPost instance.
* Binary tree like class which represents a goal post.
* Constructed with a left post, right post, and back post ( parent ) all are instances in this class.

### `updateState( document )`
* Simply updates the state of the mouse based on the user input.
* Given a refference to the document attaches event listeners on the following events:
    * `onmousemove( event )`: Event triggered when the mouse moves accross the screen.
    * `onmousedown( event )`: Event triggered when the mouse button is pressed in but not released.
    * `onmouseup( event )`: Event triggered when the mouse button finally released.

### `getMouseX()`
* Returns the value of the private x position of the mouse.

### `getMouseY()`
* Returns the value of the private y position of the mouse.

### `getMouseClicked()`
* Returns the current state of whether the mouse was clicked.

## Public Methods