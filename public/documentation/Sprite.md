# Sprite.js
<h1>This class to encapsulate an image & all possible transformations.</h1>
<h1>Furthemore, provides most of the functionality of the game engine.</h1>

## Private Attributes
* `scene`: private refference to the global scene instance.
* `canvas`: private refference to the canvas DOM element.
* `context`: private refference to the suporting context provided by the canvas.
* `image`: private refference to the image encapsulated by this sprite.
* `width`: private integer representing the width of the sprite.
* `height`: private integer representing the height of the sprite.
* `cWidth`: private integer representing the width of the canvas.
* `cHeight`: private integer representing the height of the canvas.
* `x`: private integer representing the x position of the sprite.
* `y`: private integer representing the y position of the sprite.
* `dx`: private integer representing the change in the x position of the sprite.
* `dy`: private integer representing the change in the y position of the sprite.
* `imgAngle`: private integer representing the angle the sprite image will be pointing in radians.
* `moveAngle`: private integer representing the angle the sprite image will be moving in radians.
* `speed`: private integer representing the how fast the speed of the sprite changes.
* `visible`: private boolean representing whether the sprite is visible or not.
* `boundAction`: private enum representing the characteristic of the sprite when it hits an bound.
* `FRICTION_REDUCTION`: private float representing the percentage of velocity remaining after friction is applied.

## Private Methods

### `setImage( imgPath )`
* Given a path changes the image.

### `draw()`
* Method to draw the internal state of the sprite onto the canvas.

### `reactToWrap( FLAGS, BORDER_DATA )`
* Implements wrap property when a boundery is hit.

### `reactToBounce( FLAGS, BORDER_DATA )`
* Implements bounce property when a boundery is hit.

### `reactToStop( FLAGS, BORDER_DATA )`
* Implements stop property when a boundery is hit.

### `reactToDie( FLAGS, BORDER_DATA )`
* Implements a death property when a boundery is hit.

### `checkBounds()`
* Private helper method to check if we have hit the bounds of the canvas.

### `changeMoveAngleBy( degrees )`
* Alters the private move angle of the sprite.


### `changeImageAngleBy( degrees )`
* Alters the image angle value given a theta in degrees.

## Public Methods

### `constructor( scene, imageFile, width, height )`
* Constructor responsiable for initializing the Sprite instance.

### `changeImage( imgPath )`
* Given a path changes the image, purpose is to be a setter.

### `setImageAngleStrict( degrees )`
* Alters the image angle value given an exact theta in degrees.

### `setReductionFactor( factor )`
* Sets the reduction factor of the sprite, so we can apply friction later

### `changeSpeedBy( relativeValue )`
* Given a relative integer value, will be used to alter the properties of dx & dy.

### `setDimension( width, height )`
* Setter when goal post class inherits this class

### `setPosition( x, y )`
* Alters the position of the center, purpose is to be a setter.


### `setChangeX( changeX )`
* Alters the private dx attribure, purpose is to be a setter.

### `setChangeY( changeY )`
* Alters the private dy attribure, purpose is to be a setter.

### `setX( xValue )`
* Setter for private x value of the sprite.

### `setY( yValue )`
* Setter for private y value of the sprite.

### `setDx( initDx )`
* Setter for private dx value.

### `setDy( initDy )`
* Setter for private dy value.

### `setBoundAction( action )`
* Setter for the private bound action attribute.

### `setSpeed( speed )`
* Sets the speed of the sprite.

### `calcSpeedAngle()`
* Inverse function of calcVector, alters speed based on dx, dy.

### `changeXBy( relativeChange )`
* Changes the x attribute, relative to its current value.

### `changeYBy( relativeChange )`
* Changes the y attribute, relative to its current value.

### `show()`
* If hidden shows the sprite.

### `hide()`
* If visible hides the sprite.

### `getVisibility()`
* Returns the visible state of the sprite.

### `getXPos()`
* Returns the private x position of the sprite.

### `getYPos()`
* Returns the private y position of the sprite.

### `getWidth()`
* Returns the private width of the sprite.

### `getHeight()`
* Returns the private height of the sprite.

### `getSpeed()`
* Returns the private speed attribute of the sprite.

### `getDx()`
* Returns the private dx attribute of the sprite.

### `getDy()`
* Returns the private dx attribute of the sprite.

### `getImageAngle()`
* Returns the private image angle attribute of the sprite.

### `getMotionAngle()`
* Returns the private image motion attribute of the sprite.

### `update()`
* Updates the sprite on the canvas adn its internal state.

### `checkCollisionWith( OtherSprite )`
* Given anothe sprite, checks if a collision occured between the 2 sprites.
