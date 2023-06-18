
export const BOUNDARY_ACTIONS = {
    WRAP: 0,
    BOUNCE: 1,
    STOP: 3,
    DIE: 4,
    CONTINUE: 5
};

// class to encapsulate an image & all possible transformations
export class Sprite {

    // declare private variables
    #scene;
    #canvas;
    #context;
    #image
    #width
    #height
    #cHeight;
    #cWidth;
    #x 
    #y 
    #dx 
    #dy 
    #imgAngle 
    #moveAngle 
    #speed 
    #visible 
    #boundAction 
    // initialize attributes
    constructor(scene, imageFile, width, height){
        
        // resources 
        this.#scene = scene;
        this.#canvas = scene.getCanvas();
        this.#context = this.#canvas.getContext("2d");
        this.#image = new Image();
        this.#image.src = imageFile;
        
        // dimensions
        this.#width = width;
        this.#height = height;
        this.#cHeight = parseInt(this.#canvas.height);
        this.#cWidth = parseInt(this.#canvas.width);
        this.#visible = true;
        this.#boundAction = BOUNDARY_ACTIONS.BOUNCE;
        this.camera = false;

        // movement
        this.#x = 100;
        this.#y = 100;
        this.#dx = 1;
        this.#dy = 1;
        this.#imgAngle = 0;
        this.#moveAngle = 0;
        this.#speed = 7;
    }

    // private methods
    #setImage(imgPath){
        // given a path changes the image
        this.#image.src = imgPath;
    }

    // draw frame

    #draw(){
        // method to draw the internal state of the sprite onto the canvas
        // need to find a way to implement a friend function like in cpp

        let localContext = this.#context;
        // update all internal state
        localContext.save();

        // apply transformations
        localContext.translate(this.#x, this.#y);
        localContext.rotate(this.#imgAngle);

        localContext.drawImage(this.#image, 0 - (this.#width / 2), 0 - (this.#height / 2), this.#width, this.#height)
        // save transformations
        localContext.restore();
    }
    
    #checkBounds() {
        // private helper method to check if we have hit the bounds of the canvas
        
        var cameraX = 0; 
        var cameraY = 0;
        
        // boundary flags
        const FLAGS = {
            offRight: false,
            offLeft: false,
            offTop: false,
            offBottom: false
        };
        
        // catch undefined values that cause values to be NaN.
        (cameraY === undefined)? cameraY = 0 : cameraY;
        (cameraX === undefined)? cameraX = 0 : cameraX;
        const BORDER_DATA = {
            rightBorder: this.#cWidth + cameraX, 
            leftBorder: cameraX,
            topBorder: cameraY,
            bottomBorder: this.#cHeight + cameraY
        }
        
        if (this.#x < BORDER_DATA.leftBorder){
            FLAGS.offLeft = true;
        }
        
        if (this.#x > BORDER_DATA.rightBorder){
            FLAGS.offRight = true;
        }
        
        if (this.#y < 0){
            FLAGS.offTop = true;
        }
        
        if (this.#y > BORDER_DATA.bottomBorder){
            FLAGS.offBottom = true;
            // console.log(this.#x,this.#y);
        }
        
        // respond to potential out of bounds
        if (this.#boundAction === BOUNDARY_ACTIONS.WRAP){
            this.reactToWrap(FLAGS, BORDER_DATA);
        } else if (this.#boundAction === BOUNDARY_ACTIONS.BOUNCE){
            this.reactToBounce(FLAGS)
        } else if (this.#boundAction === BOUNDARY_ACTIONS.STOP){
            this.reactToStop(FLAGS)
        } else if (this.#boundAction === BOUNDARY_ACTIONS.DIE){
            this.reactToDie(FLAGS)
        }
        
    }
    #calcVector(){
        // alter the values for dx and dy using speed
        this.#dx = this.#speed * Math.cos(this.#moveAngle);
        this.#dy = this.#speed * Math.sin(this.#moveAngle);
    }
    #changeMoveAngleBy(degrees){
        // alters the private move angle of the sprite
        let radians = degrees * (Math.PI / 180);
        this.#moveAngle += radians;
        this.#calcVector();
    }
    #changeImageAngleBy(degrees){
        // alters the image angle value given a theta in degrees
        let radians = degrees * (Math.PI / 180);
        this.#imgAngle += radians;
    }
    
    
    // public methods
    changeImage(imgPath){
        // given a path changes the image, purpose is to be a setter
        this.#setImage(imgPath);
    }
    changeSpeedBy(relativeValue){
        this.#speed += relativeValue;
        this.#calcVector();
    }
    
    changeAngleBy(degrees){
        // changes the angle attributes of the sprite by a relative amount in degrees
        this.#changeImageAngleBy(degrees);
        this.#changeMoveAngleBy(degrees);
    }
    
    setPosition(x,y){
        // alters the position of the center, purpose is to be a setter
        this.#x = x;
        this.#y = y;
    }
    
    setChangeX(changeX){
        // alters the private dx attribure, purpose is to be a setter
        this.#dx = changeX;
    }
    setChangeY(changeY){
        // alters the private dy attribure, purpose is to be a setter
        this.#dy = changeY;
    }
    setX(xValue){
        // setter for private x value
        this.#x = xValue;
    }
    setY(yValue){
        // setter for private y value
        this.#y = yValue;
    }
    setDx(initDx){
        // setter for private dx value
        this.#dx = initDx;
    }
    setDy(initDy){
        // setter for private dy value
        this.#dy = initDy;
    }
    setBoundAction(action){
        // setter for the private bound action attribute
        this.#boundAction = action;
    }
    setSpeed(speed){
        // sets the speed of the sprite
        this.#speed = speed;
        this.#calcVector();
    }
    calcSpeedAngle() {
        // inverse function of calcVector, alters speed based on dx, dy
        this.#speed = Math.sqrt(Math.pow(this.#dx, 2) + Math.pow(this.#dy, 2));
        this.#moveAngle = Math.atan2(this.#dy, this.#dx);
    }
    
    changeXBy(relativeChange){
        // changes the x attribute, relative to its current value
        this.#x += relativeChange;
    }
    changeYBy(relativeChange){
        // changes the y attribute, relative to its current value
        this.#y += relativeChange;
    }
    // might merge into a toggle meth
    show(){
        // if hidden shows the sprite
        this.#visible = true;
    }
    hide(){
        // if visible hides the sprite
        this.#visible = false;
    }
    getVisibility(){
        // returns the visible state of the sprite
        return this.#visible;
    }
    getXPos(){
        // returns the private x position
        return this.#x;    
    }
    getYPos(){
        // returns the private y position
        return this.#y;    
    }
    getWidth(){
        // returns the private width of the sprite
        return this.#width;
    }
    getHeight(){
        // returns the private height of the sprite
        return this.#height;
    }
    getSpeed(){
        // returns the private speed attribute of the sprite
        return this.#speed;
    }
    getDx(){
        // returns the private dx attribute of the sprite
        return this.#dx;
    }
    getDy(){
        // returns the private dy attribute of the sprite
        return this.#dy;
    }
    update(){
        // updates the sprite on the canvas adn its internal state.
        this.#x += this.#dx;
        this.#y += this.#dy;
        
        this.#checkBounds();
        // console.log(this.#visible);
        if (this.#visible) {
            this.#draw();
        }
        // (this.#visible)? this.#draw(): this.#draw();
    }
    
    checkCollisionWith(OtherSprite){
        // checks if a collision occured between 2 sprites
        let collided = false;
        let bothSpritesVisible = this.#visible && OtherSprite.getVisibility();
        
        if (bothSpritesVisible){
            const BOUNDS = {
                myLeft: this.#x - (this.#width / 2),
                myRight: this.#x + (this.#width / 2),
                myTop: this.#y - (this.#height / 2),
                myBottom: this.#y + (this.#height / 2),
                OtherSpriteLeft: OtherSprite.getXPos() - (OtherSprite.getWidth() / 2),
                OtherSpriteRight: OtherSprite.getXPos() + (OtherSprite.getWidth() / 2),
                OtherSpriteTop: OtherSprite.getYPos() - (OtherSprite.getHeight() / 2),
                OtherSpriteBottom: OtherSprite.getYPos() + (OtherSprite.getHeight() / 2)
            };
            
            // assume collision and try to disprove
            collided = true;
            let didNotCollide = (BOUNDS.myBottom < BOUNDS.OtherSpriteTop) ||
                                (BOUNDS.myTop > BOUNDS.OtherSpriteBottom) ||
                                (BOUNDS.myRight < BOUNDS.OtherSpriteLeft) ||
                                (BOUNDS.myLeft > BOUNDS.OtherSpriteRight)
                                
                                if (didNotCollide){
                                    collided = false;
                                }
                            }
                            
                            return collided;
                        }
                        
                        
                        
    reactToWrap(FLAGS, BORDER_DATA){
        // implements wrap property when boundery is hit
    
        if (FLAGS.offRight){
            this.#x = BORDER_DATA.leftBorder;
        }
        if (FLAGS.offBottom){
            this.#y = BORDER_DATA.topBorder;
        }
        if (FLAGS.offLeft){
            this.#x = BORDER_DATA.rightBorder;
        }
        if (FLAGS.offTop){
            this.#y = BORDER_DATA.bottomBorder;
        }
    }
    reactToBounce(FLAGS){
        // implements bounce property when boundery is hit
    
    
        let offTopOrBottom = FLAGS.offTop || FLAGS.offBottom;
        let offLeftOrRight = FLAGS.offLeft || FLAGS.offRight;
    
        // invert dx or dy
        if (offTopOrBottom) {
            this.#dy *= -1;
        } 
        if (offLeftOrRight){
            this.#dx *= -1;
        }
    
        const POSITION_PADDING = 5;
        if (FLAGS.offTop) {
            this.#y += POSITION_PADDING;
        } else if (FLAGS.offBottom) {
            this.#y -= POSITION_PADDING;
        } else if (FLAGS.offLeft) {
            this.#x += POSITION_PADDING;
        } else if (FLAGS.offRight) {
            this.#x -= POSITION_PADDING;
        }
        // get new speed angle
        this.calcSpeedAngle();
        this.#imgAngle = this.#moveAngle;
    }

    reactToStop(FLAGS){
        // implements stop property when boundery is hit
        const STOP = 0;
        let outOFBounds = FLAGS.offBottom || FLAGS.offTop || FLAGS.offLeft || FLAGS.offRight;
        if (outOFBounds) {
            this.setSpeed(STOP);
        }
    }
    reactToDie(FLAGS){
        // implements die property when boundery is hit
        const STOP = 0;
        let outOFBounds = FLAGS.offBottom || FLAGS.offTop || FLAGS.offLeft || FLAGS.offRight;
        if (outOFBounds) {
            this.setSpeed(STOP);
            this.hide();
        }
    }
}
                    
                    