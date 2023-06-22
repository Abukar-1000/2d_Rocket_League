# Mouse.js
<h1>This class controls and manages the mouse and all associated functionality</h1>

## Private Attributes
* `x_pos`: private integer representing the x cordinate of the mouse at any point in time.
* `y_pos`: private integer representing the y cordinate of the mouse at any point in time.
* `mouseClicked`: Private boolean representing whether the mouse was clicked or not.

## Public Attributes
* `mouseDown`: Private boolean representing whether the mouse is currently down or not.

## Public Methods

### `constructor()`
* Constructor responsiable for initializing the Mouse instance.

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