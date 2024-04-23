const display = document.getElementById('display'); 

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value); 
    }
    catch(error) {
        display.value = 'Error';
    }
}

// MODIFICATIONS: 
/**
 * add AC button 
 * add +/- button
 * addd % button
 * change '/' to proper division symbol
 * change to proper ios calculator styling
 * fix proper ios positioning
 * make it darker
 * operator-btn's must not be appended to the display.
 */
