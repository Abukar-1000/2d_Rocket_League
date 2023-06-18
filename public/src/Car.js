import { Sprite } from "./Sprite.js";

export class Car extends Sprite {
    // #scene;
    // #canvas;
    // #context;
    // #image
    // #width
    // #height
    // #cHeight;
    // #cWidth;
    // #x 
    // #y 
    // #dx 
    // #dy 
    // #imgAngle 
    // #moveAngle 
    // #speed 
    // #visible 
    // #boundAction
    #keyboard
    #keyboardState;
    constructor(scene, image, width, height, keyboard){
        // keep refference to keyboard in memory, so we reduce copying data
        super(scene, image, width, height);
        this.#keyboard = keyboard;
        this.#keyboardState = this.#keyboard.getKeyArr();
        console.log(this.getDx(), this.getDy())
    }
    control(){
        const MAX_SPEED = 1.2;
        
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
}
