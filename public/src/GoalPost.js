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