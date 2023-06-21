# 2d_Rocket_League

# Documentation
This is my implementation of a 2D version of Rocket League. </br>
Please click [HERE](https://frantic-pocketbook-seal.cyclic.app/) to take a look.

## Technical Documentation

For each class or file used here is the functional documentation:

* Main.js
* Scene.js
* Keyboard.js
* Mouse.js
* Sprite.js
* GoalPost.js
* Car.js
* Ball.js

# Game Design

### Overview
In this game there really only is 1 scene, the main scene. For this reason I decided to encapsulate this </br> inside the file main.js. Hence the name main. In the main scene we will first initialize all our </br> class instances globally using the var keyword. I am doing this because I am initializing all </br> instances in the function `init()`, therefore I would like them to be available globally. </br> 
Here is a list of all the classes Ill be using in game:

* Main.js
* Scene.js
* Sprite.js
* GoalPost.js
* Car.js
* Ball.js
* Keyboard.js
* Mouse.js 

Since `Main.js` has been covered already, I will now explain the rest. </br>
### Scene.js

Encapsulates all the functionality I plan on using from the canvas DOM element. 
Here are those functionalities:
* Initialize the score board at the start of the game.
* Start my main game loop.
* Stop the main game loop.


## Credits  &ensp; <img src="public/logos/credit.png" width="25" height="25">
* Icons: 
    * <a href="https://www.flaticon.com/free-icons/document" title="document icons">Document icons created by Freepik Flaticon</a>
* Car Images:
    * <a href="https://stock.adobe.com/Library/urn:aaid:sc:US:d7f9259d-5e63-427c-823d-a217f93a4126?asset_id=281630869">Licensed from Adobe Stock</a>

    * https://stock.adobe.com/Library/urn:aaid:sc:US:d7f9259d-5e63-427c-823d-a217f93a4126?asset_id=523748734
* Soccer Ball:
    * <a href="https://stock.adobe.com/Library/urn:aaid:sc:US:d7f9259d-5e63-427c-823d-a217f93a4126?asset_id=281630869">Licensed from Adobe Stock</a>
* Goal Post Images:
    * <a href="https://stock.adobe.com/Library/urn:aaid:sc:US:d7f9259d-5e63-427c-823d-a217f93a4126?asset_id=281630869">Licensed from Adobe Stock</a>


# Thanks For Stopping By 😎