# Keyboard.js
<h1>This class controls and manages the keyboard and all associated functionality</h1>

## Private Attributes
* `keysArr`: private refference to an array of key codes stored on the heap.
* `KEY_A`: Key code for A key.
* `KEY_B`: Key code for B key.
* `KEY_C`: Key code for C key.
* `KEY_D`: Key code for D key.
* `KEY_E`: Key code for E key.
* `KEY_F`: Key code for F key.
* `KEY_G`: Key code for G key.
* `KEY_H`: Key code for H key.
* `KEY_I`: Key code for I key.
* `KEY_J`: Key code for J key.
* `KEY_K`: Key code for K key.
* `KEY_L`: Key code for L key.
* `KEY_M`: Key code for M key.
* `KEY_N`: Key code for N key.
* `KEY_O`: Key code for O key.
* `KEY_P`: Key code for P key.
* `KEY_Q`: Key code for Q key.
* `KEY_R`: Key code for R key.
* `KEY_S`: Key code for S key.
* `KEY_T`: Key code for T key.
* `KEY_U`: Key code for U key.
* `KEY_V`: Key code for V key.
* `KEY_W`: Key code for W key.
* `KEY_X`: Key code for X key.
* `KEY_Y`: Key code for Y key.
* `KEY_Z`: Key code for Z key.
* `KEY_LEFT`: Key code for the LEFT key. 
* `KEY_RIGHT`: Key code for the RIGHT key. 
* `KEY_UP`: Key code for the UP key. 
* `KEY_DOWN`: Key code for the DOWN key. 
* `KEY_SPACE`: Key code for the SPACE key. 
* `KEY_ESC`: Key code for the ESC key. 
* `KEY_PGUP`: Key code for the PGUP key. 
* `KEY_PGDOWN`: Key code for the PGDOWN key. 
* `KEY_HOME`: Key code for the HOME key. 
* `KEY_END`: Key code for the END key.
* `KEY_0`: Key code for the number 0 key on the keyboard.
* `KEY_1`: Key code for the number 1 key on the keyboard.
* `KEY_2`: Key code for the number 2 key on the keyboard.
* `KEY_3`: Key code for the number 3 key on the keyboard.
* `KEY_4`: Key code for the number 4 key on the keyboard.
* `KEY_5`: Key code for the number 5 key on the keyboard.
* `KEY_6`: Key code for the number 6 key on the keyboard.
* `KEY_7`: Key code for the number 7 key on the keyboard.
* `KEY_8`: Key code for the number 8 key on the keyboard.
* `KEY_9`: Key code for the number 9 key on the keyboard.
* `currentKey`: Private referrence to the most recent key pressed.

## Private Methods

### `initKeys()`
* Allocates 256 bytes on the heap for `keysArr` array. Furthermore, initializes all values to `false`.

### `selectKey( keyCode )`
* Helper method to update state of the keyboard when a key is pressed down.

### `deselectKey( keyCode )`
* Helper method to update state of the keyboard when a key is released.

## Public Methods

### `constructor()`
* Constructor responsiable for initializing the Keyboard instance.

### `getKeyArr()`
* Getter method that returns the private refference to `keysArr`.

### `updateState( document )`
* Updates the state of the keyboard based on the user input either keypressed, or keyReleased.
