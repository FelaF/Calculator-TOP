function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

console.log(divide(8,4))
console.log(add(8,4))
console.log(multiply(8,4))
console.log(subtract(8,4))

let firstNum;
let secondNum;
let operatives = [add,subtract,multiply,divide]
function isOperative(operation){
    if(operatives.includes(operation)){
        return operation;
    }
    else{
        return false
    }};

function operate(firstNum,operative,secondNum){
    operative = isOperative(operative)
    return operative(firstNum, secondNum);    
}ssssssssssssssssssssss
console.log(operate(1,add,5))

/// My alternative plan was to append an anonymous reduce function
/// so that operation doesn't have to take any implicit arguments

console.log(operate(5,multiply,5))


Display = document.querySelector("#Display")

function updateDisplay(number){
        Display.textContent += number
}
function clearDisplay(){
    Display.textContent = ""
}
let clearButton = document.querySelector("div#Symbols #Clear")
clearButton.addEventListener("click", clearDisplay)
let numberedButtons = document.querySelector("div#Numbers")
numberedButtons.addEventListener("click",  (event) => {
    let target = event.target;
    switch(target.id){
        case "zero":
            updateDisplay(0)
            break;
        case "one":
            updateDisplay(1);
            break;
        case "two":
            updateDisplay(2);
            break;
        case 'three':
            updateDisplay(3);
            break;
        case "four":
            updateDisplay(4);
            break;
        case "five":
            updateDisplay(5)
            break;
        case "six":
            updateDisplay(6);
            break;
        case "seven":
            updateDisplay(7);
            break;
        case 'eight':
            updateDisplay(8);
            break;
        case "nine":
            updateDisplay(9);
            break;
    }
})





function getFValue(){
    let Value;
    Value = Display.textContent
    Display.textContent = ""
    console.log(Value)
    return parseInt(Value)
}
function getSValue(){
    let Value2;
    Value2 = Display.textContent
    Display.textContent = ""
    console.log(Value2)
    return parseInt(Value2)
}

let symbolButtons = document.querySelector("div#Symbols")
symbolButtons.addEventListener("click",  (event) => {
    let finalOperation;
    let target = event.target;
    switch(target.id){
        case "Plus":
            Number(getFValue())
            finalOperation = add
            break;
        case "Minus":
            Number(getFValue())
            finalOperation = subtract
            break;
        case "Divide":
            Number(getFValue())
            finalOperation = divide
            break;
        case 'Multiply':
            Number(getFValue())
            finalOperation = multiply
            break;
        case "Equal":
            Number(getSValue())
            x = operate(getFValue, finalOperation, getSValue)
            console.log(x)
            break;
    }});