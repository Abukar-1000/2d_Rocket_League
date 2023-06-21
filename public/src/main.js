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
    // car = new Sprite(scene, "ySportsCar.png", 50, 30);
    player1 = new Car(scene, "ySportsCar.png", 50, 30, keyboard);
    // ball = new Sprite(scene, "ballSprite.png", 25, 25);
    ball = new Ball(scene, "ballSprite.png", 25, 25, player1, null);
    // goalPosts = new GoalPosts(scene, ball);

    leftGoalPost = new GoalPost(scene, player1, player2, ball, "left");
    rightGoalPost = new GoalPost(scene,player1, player2, ball, "right");
    // initialize values
    player1.setPosition(200,200);
    // set up event listeners
    keyboard.updateState(document)
    mouse.updateState(document)
    scene.start(main);
    
}

// function controlCar(){
//     const MAX_SPEED = 1.2;

//     if (keyboardState[keyboard.KEY_W]){
//         let newSpeed;
//         if (car.getSpeed() < 0.1){
//             newSpeed = 0.8 * MAX_SPEED;
//         } else {
//             newSpeed = Math.min(car.getSpeed(), MAX_SPEED)
//         }
//         car.changeSpeedBy(newSpeed);
//     }
//     if (keyboardState[keyboard.KEY_S]){
//         car.changeSpeedBy(-1.2);
//     }
//     if (keyboardState[keyboard.KEY_D]){
//         car.changeAngleBy(4);
//     }
//     if (keyboardState[keyboard.KEY_A]){
//         car.changeAngleBy(-4);
//     }
// }

function applyFriction(){
    const FRICTION_REDUCTION_FOR_BALL = 0.98;
    const FRICTION_REDUCTION_FOR_CAR = 0.96;
    ball.setSpeed(ball.getSpeed() * FRICTION_REDUCTION_FOR_BALL);
    player1.setSpeed(player1.getSpeed() * FRICTION_REDUCTION_FOR_CAR);

}

function reactToCollision(){
    // alters the trajectory of the ball and plays a sound if it collides with the car
    const CAR_MASS = .9;
    let collided = player1.checkCollisionWith(ball);
    if (collided){
        console.log(`collision: (${ball.getXPos()}, ${ball.getYPos()})`)
        // ball.changeAngleBy(25);
        // account for force
        let force = CAR_MASS * player1.getSpeed();

        ball.setSpeed(force);
    }
}
// this is the update function
function main() {
    scene.clearScreen();
    leftGoalPost.update();
    rightGoalPost.update();
    player1.update();
    ball.update();
    // reactToCollision();
    ball.react();
    player1.control();
    // applyFriction();
}

// runs app when document has loaded 
document.addEventListener("DOMContentLoaded",init, false);

// stop the game loop when user wants to leave
window.onunload = e => {
    scene.stop();
}