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
let x = 2;
let operatives = [add,subtract,multiply,divide]
function isOperative(operative){
    if(operatives.includes(operative)){
        return operative;
    }
    else{
        console.log("What")
    }};

function operate(firstNum,operation,secondNum){
    operation = isOperative(operation)

    { return operation(firstNum, secondNum); }  
}
console.log(operate(1,add,x))

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


let Value, Value2;

function getFValue(){
    let Value;
    Value = Display.textContent
    Display.textContent = ""
    Value = parseInt(Value)
    console.log(Value)
    return Value
}
function getSValue(){
    Value2 = Display.textContent
    Display.textContent = ""
    Value2 = parseInt(Value2)
    console.log(Value2)
    return Value2

}
let Cheese,y,z;

let symbolButtons = document.querySelector("div#Symbols")
symbolButtons.addEventListener("click",  (event) => {
    let target = event.target;
    switch(target.id){
        case "Plus":
            y = parseInt(getFValue());
            Cheese = add;
            break;
        case "Minus":
            y = parseInt(getFValue())
            Cheese = subtract;
            break;
        case "Divide":
            y = parseInt(getFValue())
            Cheese = divide;
            break;
        case 'Multiply':
            y = parseInt(getFValue())
            Cheese = multiply;
            break;
        case "Equal":
            z = parseInt(getSValue())
            console.log(isOperative(Cheese))
            return operate((y,Cheese,z))
            break;
    }});