import { Sprite } from "./Sprite.js";

// goal posts are sprites without images
export class GoalPosts extends Sprite {
    #ball;
    #player1;
    #player2;
    #scene;
    #postPostitions;
    #width;
    #height;
    
    constructor(scene, ball, player1, player2){
        // init with a refference of the scene and the ball 
        super(scene,"", null, null);
        this.#scene = scene;
        this.#ball = ball;
        this.setDimension(100,100);
        this.visible = false;
    }
    #outsidePostHit(gameObj){

        const leftPost = this.#postPostitions.leftPost;
        const rightPost = this.#postPostitions.rightPost;
        const [objectX, objectY] = [gameObj.getXPos(), gameObj.getYPos()];
        const touchedLeftUpperBar = (objectY === leftPost.y1) && 
                                        (objectX > leftPost.x2) && (objectX < leftPost.x2);

        let outsideHit = false;
        // check outside region of left post
        if (touchedLeftUpperBar) {
            outsideHit = true;
        }

        if (outsideHit) {

        }
    }

    #draw(){
        // draw both goal posts
        let context = this.#scene.getPrivateContext();
        context.strokeStyle = "black";
        context.lineWidth = "5";

        let leftPost = this.postPostitions.leftPost;
        let rightPost = this.postPostitions.rightPost;

        // draw left goal post
        context.beginPath();
        context.moveTo(leftPost.x1, leftPost.y1);
        context.lineTo(leftPost.x2, leftPost.y2);
        context.lineTo(leftPost.x3, leftPost.y3);
        context.lineTo(leftPost.x4, leftPost.y4);    
        context.stroke();

        // draw right goal post
        context.beginPath();
        context.moveTo(rightPost.x1, rightPost.y1);
        context.lineTo(rightPost.x2, rightPost.y2);
        context.lineTo(rightPost.x3, rightPost.y3);
        context.lineTo(rightPost.x4, rightPost.y4);    
        context.stroke(); 
    }


    update() {
        // just redraws goal posts 
        this.#draw();   
    }
}


export class GoalPost {

    #backPost;
    #topPost;
    #bottomPost;
    #goalType;
    #minChange;
    #player1;
    #player2;
    #ball;
    // remove x, y
    constructor(scene, player1, player2, ball, goalType){
        // Binary tree like class which represents a goal post 
        // constructed with a left post, right post, and back post ( parent ) all are instances in this class
        // initialize nested classes with dimension values 
        this.#backPost = new Sprite(scene, "postBack.png", 10, 200);
        this.#topPost = new Sprite(scene, "postSide.png", 150, 10);
        this.#bottomPost = new Sprite(scene, "postSide.png", 150, 10);

        // 
        this.#player1 = player1;
        this.#player2 = player2;
        this.#ball = ball;
        // this makes it seem like the goal post is not moving, will help rotate later
        this.#minChange = 0.0000000000001;
        // specify left or right goal
        this.#goalType = goalType;
        
        this.#initializeNet();
        
    }
    #initializeNet(){
        // place the goal on screen based on if the goal is a left goal or a right goal
        if (this.#goalType === "left"){
            // place the back side of the goal then position other 2 sides with respect to the back post
            this.#backPost.changeAngleBy(180 - this.#backPost.getImageAngle());
            this.#backPost.setPosition(2,250)
            
            // place the top post 
            this.#topPost.setPosition(15,150);
            this.#topPost.changeAngleBy(180 - this.#topPost.getImageAngle());
            // place bottom post
            this.#bottomPost.setPosition(15,350);
            this.#bottomPost.changeAngleBy(180 - this.#bottomPost.getImageAngle());
        } else if (this.#goalType === "right") {

            // place the back side of the goal then position other 2 sides with respect to the back post
            this.#backPost.changeAngleBy(180 - this.#backPost.getImageAngle());
            this.#backPost.setPosition(904,250)
            
            // place the top post 
            this.#topPost.setPosition(905,150);
            this.#topPost.changeAngleBy(180 - this.#topPost.getImageAngle());
            // place bottom post
            this.#bottomPost.setPosition(905,350);
            this.#bottomPost.changeAngleBy(180 - this.#bottomPost.getImageAngle());
        }
    }
    #stopGoalFromMoving(){
        // minimizes dx and dy to keep the goal stationary
        // stop the post from moving
        this.#backPost.setDx(0);
        this.#backPost.setDy(this.#minChange);

        this.#topPost.setDx(0);
        this.#topPost.setDy(this.#minChange);

        this.#bottomPost.setDx(0);
        this.#bottomPost.setDy(this.#minChange);

    }
    #handleCollision(otherSprite){
        // handles the collisions of various object with respect to the goal post on the screen
        let collisionWithSides = (
            this.#bottomPost.checkCollisionWith(otherSprite) ||
            this.#topPost.checkCollisionWith(otherSprite)
        );

        let collidesWithBack = this.#backPost.checkCollisionWith(otherSprite);
        const PADDING = 10;
        const impactLoss = 0.48;

        if (this.#bottomPost.checkCollisionWith(otherSprite)){
            console.log("collides with side")
            // invert their y velocity & speed them up a bit
            otherSprite.setDy(otherSprite.getDy() * -impactLoss);
            otherSprite.setY(otherSprite.getYPos() + PADDING);
        
        }
        else if (this.#topPost.checkCollisionWith(otherSprite)){
            console.log("collides with side")
            // invert their y velocity & speed them up a bit
            otherSprite.setDy(otherSprite.getDy() * -impactLoss);
            otherSprite.setY(otherSprite.getYPos() - PADDING);
        
        }
        else if (this.#bottomPost.checkCollisionWith(otherSprite)){
            console.log("collides with side")
            // invert their y velocity & speed them up a bit
            otherSprite.setDy(otherSprite.getDy() * -impactLoss);
            otherSprite.setY(otherSprite.getYPos() - PADDING);
        
        }
        else if (this.#bottomPost.checkCollisionWith(otherSprite)){
            console.log("collides with side")
            // invert their y velocity & speed them up a bit
            otherSprite.setDy(otherSprite.getDy() * -impactLoss);
            otherSprite.setY(otherSprite.getYPos() - PADDING);
        
        }
        else if (collidesWithBack){
            console.log("collides with bottomd")
            otherSprite.setDx(otherSprite.getDx() * -impactLoss);

            if (this.#goalType === "left"){
                otherSprite.setX(otherSprite.getXPos() + PADDING);
            } else {
                otherSprite.setX(otherSprite.getXPos() - PADDING);
            }
        }

    }
    checkForGoal(){
        // returns true if a goal was scored else false
    }
    update(){

        this.#stopGoalFromMoving();
        this.#initializeNet();

        // check for collisions
        this.#handleCollision(this.#ball);
        // put goal on screen  
        this.#backPost.update();
        this.#topPost.update();
        this.#bottomPost.update();
    }
}