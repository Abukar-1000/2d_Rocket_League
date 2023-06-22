# Ball.js
<h1>This class controls and manages the ball and all associated functionality</h1>

## Private Attributes
* `player1`: private refference to player 1 which is on the heap.
* `player2`: private refference to player 2 which is on the heap.
* `RETENTION_AFTER_FRICTION`: private float attribute repreenting the velocity of the ball after friction is applied. 
* `FLAGS`: private object used to store multiple flags for collision detection.

## Private Methods

`resetFlags()`
* Clears all changes made to FLAGS.

`bounceBall( playerPosition )`
* Based on where the ball was comming from inverts dx and dy and alters position.

`handleBounce( player )`
* Handles the phisics of the ball bouncing after impact.

`handleCollision()`
* Helper function to abstract reacting to the ball so we can time reactions.

## Public Methods

### `constructor()`
* Constructor responsiable for initializing the Mouse instance.

### `updateState( document )`
* Simply updates the state of the mouse based on the user input.
* Given a refference to the document attaches event listeners on the following events:
    * `onmousemove( event )`: Event triggered when the mouse moves accross the screen.
    * `onmousedown( event )`: Event triggered when the mouse button is pressed in but not released.
    * `onmouseup( event )`: Event triggered when the mouse button finally released.

### `react()`
* Alters the trajectory of the ball when a collision occures with either player1 or player2.
