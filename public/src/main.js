import Scene from "./Scene.js";
import { Keyboard, Mouse } from "./UserInput.js";
import { BOUNDARY_ACTIONS, Sprite } from "./Sprite.js";
import {Car} from "./Car.js";
import { Ball } from "./Ball.js";
import { GoalPosts, GoalPost } from "./GoalPost.js";


// alert("hey")
var keyboard;
var keyboardState;
var mouse;
var scene;
var player1;
var player2;
var ball;
var goalPosts;
var leftGoalPost;
var rightGoalPost;

// initialize values
function init() {
    
    // create instances
    keyboard = new Keyboard();
    keyboardState = keyboard.getKeyArr();
    mouse = new Mouse();
    scene = new Scene(null,null,keyboard,mouse);
    
    // create player 1
    player1 = new Car(scene, "ySportsCar.png", 50, 30, keyboard, "player1");
    player1.setReductionFactor(0.96);
    
    // create player 2
    player2 = new Car(scene, "redCar.png", 50, 40, keyboard, "player2");
    player2.setReductionFactor(0.96);

    // create ball
    ball = new Ball(scene, "ballSprite.png", 25, 25, player1, player2);
    ball.setReductionFactor(0.98);
    // goalPosts = new GoalPosts(scene, ball);

    leftGoalPost = new GoalPost(scene, player1, player2, ball, "left");
    rightGoalPost = new GoalPost(scene,player1, player2, ball, "right");
    
    // car positions
    player1.setPosition(200,200);
    player2.setPosition(700,200);
    player2.changeAngleBy(180);
    // set up event listeners
    keyboard.updateState(document)
    mouse.updateState(document)
    scene.start(main);
    
}


// this is the update function
function main() {
    scene.clearScreen();
    leftGoalPost.update();
    rightGoalPost.update();

    // refresh the score board
    scene.updateScoreBoard(player1.getGoalsScored(), player2.getGoalsScored());
    player1.update();
    player2.update();
    ball.update();
    ball.react();
    player1.control();
    player2.control();
}

// runs app when document has loaded 
document.addEventListener("DOMContentLoaded",init, false);

// stop the game loop when user wants to leave
window.onunload = e => {
    scene.stop();
}