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

        // create pointers to global instances of the keyboard and mouse so state can be shared 
        this.keyboard = keyboard;
        this.mouse = mouse;
    }

    // private methods
    
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
}


export default Scene;