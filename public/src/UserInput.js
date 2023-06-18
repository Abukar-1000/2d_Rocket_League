
// class to keep track of keyboard input from user
export class Keyboard {
    #keysArr;

    constructor() {
        this.#keysArr;
        // declare key constants
        this.KEY_A = 65; 
        this.KEY_B = 66; 
        this.KEY_C = 67; 
        this.KEY_D = 68; 
        this.KEY_E = 69; 
        this.KEY_F = 70; 
        this.KEY_G = 71;
        this.KEY_H = 72; 
        this.KEY_I = 73; 
        this.KEY_J = 74; 
        this.KEY_K = 75; 
        this.KEY_L = 76; 
        this.KEY_M = 77; 
        this.KEY_N = 78;
        this.KEY_O = 79; 
        this.KEY_P = 80; 
        this.KEY_Q = 81; 
        this.KEY_R = 82; 
        this.KEY_S = 83; 
        this.KEY_T = 84; 
        this.KEY_U = 85;
        this.KEY_V = 86; 
        this.KEY_W = 87; 
        this.KEY_X = 88; 
        this.KEY_Y = 89; 
        this.KEY_Z = 90;
        this.KEY_LEFT = 37; 
        this.KEY_RIGHT = 39; 
        this.KEY_UP = 38;
        this.KEY_DOWN = 40; 
        this.KEY_SPACE = 32;
        this.KEY_ESC = 27; 
        this.KEY_PGUP = 33; 
        this.KEY_PGDOWN = 34; 
        this.KEY_HOME = 36; 
        this.KEY_END = 35;
        this.KEY_0 = 48; 
        this.KEY_1 = 49; 
        this.KEY_2 = 50; 
        this.KEY_3 = 51; 
        this.KEY_4 = 52; 
        this.KEY_5 = 53;
        this.KEY_6 = 54; 
        this.KEY_7 = 55; 
        this.KEY_8 = 56; 
        this.KEY_9 = 57; 

        this.currentKey = null;
        // init Key Array
        this.#initKeys();
    }

    // private methods
    #initKeys(){
        const KEY_COUNT = 256;
        // allocate keys array on the heap
        this.#keysArr = new Array(KEY_COUNT);
        
        // initialize all keys to false
        this.#keysArr.map(key => {
            return false;
        });
    }
    
    #selectKey(keyCode){
        // helper method to update state of the keyboard when a key is pressed down.
        this.currentKey = keyCode
        this.#keysArr[this.currentKey] = true;
    }
    #deselectKey(keyCode){
        // helper method to update state of the keyboard
        this.currentKey = null;
        this.#keysArr[keyCode] = false;
    }
    // public methods 
    getKeyArr(){
        return this.#keysArr;
    }
    
    updateState(document){
        // updates the state of the keyboard based on the user input ( keypressed, keyReleased )
        
        document.onkeyup = e => {
            this.#deselectKey(e.keyCode);
        }
        document.onkeydown = (e) => {
            this.#selectKey(e.keyCode);
        }
    }
}

export class Mouse {

    #x_pos;
    #y_pos;
    #mouseClicked;
    constructor(){
        this.#x_pos = 0;
        this.#y_pos = 0;
        this.mouseDown = null;
        this.#mouseClicked = false;
    }

    // private methods
    

    // public methods
    updateState(document){
        // updates the state of the mouse based on the user input ( mouse pressed, mouse Released ) 
        document.mouseClicked = false;
        // moved
        document.onmousemove = (event) => {
            this.#x_pos = event.pageX;
            this.#y_pos = event.pageY;
        }
        
        // pressed 
        document.onmousedown = () => {
            this.mouseDown = true;
            this.#mouseClicked = true;
        }

        // released
        document.onmouseup = () => {
            this.mouseDown = false;
            this.#mouseClicked  = false;
        }
    }

    getMouseX(){
        return this.#x_pos;
    }

    getMouseY(){
        return this.#y_pos;
    }

    getMouseClicked() {
        return this.#mouseClicked;
    }
}