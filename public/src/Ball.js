import { Sprite } from "./Sprite.js";

export class Ball extends Sprite {
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
    #player1;
    #player2;
    #RETENTION_AFTER_FRICTION;
    #FLAGS;
    constructor(scene, image, width, height, player1, player2){
        // keep refference to player 1 & 2 in memory, so we reduce copying data
        // usefull when checking for collision later
        super(scene, image, width, height);
        this.#player1 = player1;
        this.#player2 = player2;
        this.#RETENTION_AFTER_FRICTION = 0.58;
        // boundry this.#FLAGS
        this.#FLAGS = {
            offRight: false,
            offLeft: false,
            offTop: false,
            offBottom: false
        };
    }
    #resetFlags(){
        // clears all changes made tothis.#FLAGS
        this.#FLAGS = {
            offRight: false,
            offLeft: false,
            offTop: false,
            offBottom: false
        };
    }

    #bounceBall(playerPosition){
        // based on where the ball was comming from inverts dx and dy or increases it
        
        // let offTopOrBottom =this.#FLAGS.offTop ||this.#FLAGS.offBottom;
        // let offLeftOrRight =this.#FLAGS.offLeft ||this.#FLAGS.offRight;
        const speedUpFactor = 3.5;
        const POSITION_PADDING = 3;
        let [dx, dy] = [this.getDx(), this.getDy()];
        let [x, y] = [this.getXPos(), this.getYPos()];
        
        // invert dy or increase its strenght
        // playerPosition.playerXPos    playerPosition.playerYPos
        if (this.#FLAGS.offBottom) {
            const ballGoingDown = dy > 0 && (playerPosition.playerYPos > y); 
            dy = (ballGoingDown)? (-1 * dy) : dy * speedUpFactor;
        } 
        if (this.#FLAGS.offTop) {
            const ballGoingUp = dy < 0 && (playerPosition.playerYPos < y); 
            dy = (ballGoingUp)? (-1 * dy) : dy * speedUpFactor;
        } 
        // invert dx or increase its strenght
        if (this.#FLAGS.offLeft) {
            const ballGoingLeft = dx < 0 && (playerPosition.playerXPos > x); 
            dx = (ballGoingLeft)? dx * speedUpFactor : (-1 * dx);
        } 
        if (this.#FLAGS.offRight) {
            const ballGoingRight = dx > 0 && (playerPosition.playerXPos < x); 
            dx = (ballGoingRight)? dx * speedUpFactor : (-1 * dx);
        } 
    
        if (this.#FLAGS.offTop) {
            y -= POSITION_PADDING;
        } 
        if (this.#FLAGS.offBottom) {
            y += POSITION_PADDING;
        } 
        if (this.#FLAGS.offLeft) {
            x -= POSITION_PADDING;
        } 
        if (this.#FLAGS.offRight) {
            x += POSITION_PADDING;
        }

        // alter values
        this.setDx(dx);
        this.setDy(dy);
        this.setX(x);
        this.setY(y);
    }
    #handleBounce(player){
        // handles the phisics of the ball bouncing after impact
        const [playerXPos,playerYPos] = [player.getXPos(), player.getYPos()];
        const [ballXPos,ballYPos] = [this.getXPos(), this.getYPos()];

        // check upper & lower boundries of ball
        const underBallCheck = ballYPos - (player.getHeight() / 2);
        const overBallCheck = ballYPos + (player.getHeight() / 2);
        
        
        // add a padding factor to move ball and reduce collisions 
        const POSITION_PADDING = 5;

        if (ballYPos < playerYPos){
            console.log("top");
            this.#FLAGS.offTop = true;
            // this.setY(ballYPos + POSITION_PADDING);
        }
        
        if (ballYPos > playerYPos){
            console.log("bottom");
            this.#FLAGS.offBottom = true;
            // this.setY(ballYPos - POSITION_PADDING);
        }
        if (ballXPos < playerXPos){
            console.log("left");
            this.#FLAGS.offLeft = true;
            // this.setX(ballXPos - POSITION_PADDING);
        }
        
        if (ballXPos > playerXPos){
            console.log("Right");
            this.#FLAGS.offRight = true;
            // this.setX(ballXPos + POSITION_PADDING);
        }

        // move the ball 
        this.#bounceBall({
            playerXPos: playerXPos,
            playerYPos: playerYPos
        });

        
        // this.reactToBounce(this.#FLAGS);
        this.#resetFlags();
    }
    #handleCollision(){
        // helper function to abstract reacting to the ball so we can time reactions
        let collidedPLayer1 = this.checkCollisionWith(this.#player1);
        let collidedPLayer2 = false;
        let playerSpeed;
        const minVelocityThresh = 3.5;
        // let collidedPLayer2 = this.checkCollisionWith(this.#player2);

        if (collidedPLayer1){
            playerSpeed = Math.max(this.#player1.getSpeed(),minVelocityThresh);
            console.log(`speed: ${playerSpeed}`);
            let refVec = ( 2 * playerSpeed * this.#RETENTION_AFTER_FRICTION ) * this.#RETENTION_AFTER_FRICTION * 1.4;
            this.setSpeed(refVec);
            this.#handleBounce(this.#player1);
        }

        if (collidedPLayer2){
            this.#handleBounce(this.#player2); 
            let refVec = ( 2 * this.#player2.getSpeed() * this.#RETENTION_AFTER_FRICTION ) * this.#RETENTION_AFTER_FRICTION * 1.4;
            this.setSpeed(refVec);
        }
    }
    react(){
        // alters the trajectory of the ball when a collision occures with either player1 or player2 
        // ( ! ) reactiveate check 2
        this.#handleCollision();
        // setTimeout(() => {
        //     this.#handleCollision();
        // }, 75);
        // this.setY( this.getYPos() - 1);
    }
}
