/*
    Implementation of the scene object 
    Will be used as the background for sprites and game objects
*/

class Scene {
    // canvas will be static so that all instances can have access to the same canvas
    static canvas = document.createElement("canvas");
    
    // private attibute declarations
    #context;
    #intervalID;
    #width;
    #height;
    #left;
    #top;
    #scoreBoardRegion;
    // initialize data
    constructor(width, height, keyboard, mouse){
        Scene.canvas.style.backgroundColor = "grey";
        // insert canvas into DOM
        document.body.appendChild(Scene.canvas);
        this.#context = Scene.canvas.getContext("2d");


        // if values are not set
        if (width == null || height == null){
            this.setSize(900, 500);
        }

        // position of the score board
        this.#scoreBoardRegion = {
            x: 5,
            y: 30
        }
        // create pointers to global instances of the keyboard and mouse so state can be shared 
        this.keyboard = keyboard;
        this.mouse = mouse;

        this.#initializeScoreBoard();
    }

    // private methods
    #initializeScoreBoard(){
        // sets initial values for the score board
        const INIT_VALUE = 0;
        let scoreDetails = `P1: ${INIT_VALUE} | P2: ${INIT_VALUE}`;
        this.#context.fillText(scoreDetails, this.#scoreBoardRegion.x, this.#scoreBoardRegion.y);
    }
    // public methods
    start(updateCallbackFunction){
        // takes in a user defined callback, to change other states of the game
        const FIFTY_MILISECONDS = 50;
        this.#intervalID = setInterval(updateCallbackFunction, FIFTY_MILISECONDS);
    } 


    stop(){
        // stops the game loop
        clearInterval(this.#intervalID);
    }

    clearScreen(){
        // clears all drawings off the canvas
        this.#context.clearRect(0,0, this.#width, this.#height);
    }
    setBackgroundColor(color) {
        // sets bg
        Scene.canvas.style.backgroundColor = color;
    }

    setAllDimensions(height, width, top, left){
        // using the height, width, top, left we have all the values needed to place the canvas
        this.setSize(width,height);
        this.setPosition(left, top);
    }

    setSize(width, height){
        // alters the width and height of the canvas
        this.#width = width;
        this.#height = height;
        Scene.canvas.width = this.#width;
        Scene.canvas.height = this.#height;
    }
    setPosition(left, top){
        // given 2 offsets left and top, will move the canvas by those offsets
        this.#left = left;
        this.#top = top;

        
        Scene.canvas.style.MozTransform = `translate(${this.#left}px, ${this.#top}px)`;
        Scene.canvas.style.WebkitTransform = `translate(${this.#left}px, ${this.#top}px)`;
        Scene.canvas.style.OTransform = `translate(${this.#left}px, ${this.#top}px)`;
    }

    getPrivateContext(){
        // gives access to the private context attribute
        return this.#context;
    }
    getCanvas(){
        // gives access to the static canvas DOM element
        return Scene.canvas;
    }

    updateScoreBoard(player1Score, player2Score){
        // updates the score board when a goal is scored

        // graphic initialization
        this.#context.fillStyle = "black";
        this.#context.strokeStyle = "black";
        this.#context.lineWidth = "10";
        this.#context.font = "18pt sans-serif";
        const [WIDTH, HEIGHT] = [100, 100];
        // clear old values
        this.#context.clearRect(this.#scoreBoardRegion.x,this.#scoreBoardRegion.y, WIDTH, HEIGHT);
        
        // write new values after 100ms timeout
        const PADDING = "       ";
        let scoreDetails = `P1: ${player1Score} ${PADDING} P2: ${player2Score}`;
        this.#context.fillText(scoreDetails, this.#scoreBoardRegion.x, this.#scoreBoardRegion.y);
        
    }
}


export default Scene;