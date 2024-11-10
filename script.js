//Calculator JS
//Select Calculator Display
const calculatorDisplay = document.getElementById("calculatorDisplay");

//Add event listener to each button
document.getElementById("calculatorKeys").addEventListener("click", function(event) {
    const button = event.target;
    //Check if a button was clicked
    if (button.tagName === "BUTTON") {
        const value = button.innerText;

        if (value === "C") { //Check if "C" is clicked, clear display
            clearDisplay(); 
        } else if (value === "=") { //Check if "=" is clicked, evaluate expression
            calculate();
        } else {
            appendToDisplay(value); //Add the button's text to display
        }
    }
});

//Add event listener for keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (key === "Enter") { //Enter calls function to calculate
        if (calculatorDisplay.value){
            calculate();
        }
    } else if (key === "Backspace") { //Backspace removes last character from calculatorDisplay
        if (calculatorDisplay.value) {
        calculatorDisplay.value = calculatorDisplay.value.slice(0, -1); //slicing off last character
        }
    } else if (key === "Escape") { //Escape calls function to clear display
        clearDisplay();
    } else if (/[\d+\-*/.%]/.test(key)) { //Pattern of accepted digits that can be entered
        appendToDisplay(key); //Add the button's text to display
    }
});

//Functions to handle display changes/updates
function appendToDisplay(input){ //Add the button's text to display
    calculatorDisplay.value += input;
}

function clearDisplay(){ //Clear display
    calculatorDisplay.value = "";
}

//Function for calculator to work, and to catch errors and handle them correctly
function calculate(){
    try{
        if (calculatorDisplay.value.includes('/0')) { //Appropriate error for /0
            calculatorDisplay.value = "Error";
            rerturn;
        }
    calculatorDisplay.value = eval(calculatorDisplay.value); //Function for Calculator to work (do the job a calculator should do)
    }
    catch(error){
        calculatorDisplay.value = "Error";
    }
}
