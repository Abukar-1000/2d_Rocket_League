import { Sprite } from "./Sprite.js";

export class Car extends Sprite {

    #keyboard;
    #keyboardState;
    #playerType;
    #goalsScored;
    constructor(scene, image, width, height, keyboard, playerType){
        // keep refference to keyboard in memory, so we reduce copying data
        super(scene, image, width, height);
        this.#keyboard = keyboard;
        this.#keyboardState = this.#keyboard.getKeyArr();
        
        // set either player 1 or player 2
        this.#playerType = playerType;

        // initialize with 0 goals
        this.#goalsScored = 0;
    }
    control(){
        const MAX_SPEED = 1.2;
        
        // player 1 uses A S D W
        if (this.#playerType === "player1"){
            if (this.#keyboardState[this.#keyboard.KEY_W]){
                let newSpeed;
                if (this.getSpeed() < 0.1){
                    newSpeed = 0.8 * MAX_SPEED;
                } else {
                    newSpeed = Math.min(this.getSpeed(), MAX_SPEED)
                }
                this.changeSpeedBy(newSpeed);
            }
    
    
            if (this.#keyboardState[this.#keyboard.KEY_S]){
                this.changeSpeedBy(-1);
            }
            if (this.#keyboardState[this.#keyboard.KEY_D]){
                this.changeAngleBy(6);
            }
            if (this.#keyboardState[this.#keyboard.KEY_A]){
                this.changeAngleBy(-6);
            }
        }
        // player 2 uses arrow keys
        else {
            if (this.#keyboardState[this.#keyboard.KEY_UP]){
                let newSpeed;
                if (this.getSpeed() < 0.1){
                    newSpeed = 0.8 * MAX_SPEED;
                } else {
                    newSpeed = Math.min(this.getSpeed(), MAX_SPEED)
                }
                this.changeSpeedBy(newSpeed);
            }
    
    
            if (this.#keyboardState[this.#keyboard.KEY_DOWN]){
                this.changeSpeedBy(-1);
            }
            if (this.#keyboardState[this.#keyboard.KEY_RIGHT]){
                this.changeAngleBy(6);
            }
            if (this.#keyboardState[this.#keyboard.KEY_LEFT]){
                this.changeAngleBy(-6);
            }
        }
        
    }
    incrementGoalScored(){
        // increments the goal tally when a player scores a goal
        this.#goalsScored++;
    }
    getGoalsScored(){
        // returns the ammount of goals this player scores. Meant for keeping update the score board.
        return this.#goalsScored; 
    }
    getPlayerType(){
        // returns whether this is player 1 or player 2
        return this.#playerType;
    }
}
