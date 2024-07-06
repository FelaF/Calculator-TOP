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

let first, second, operater;

function operate(operator,first,second){
    operator = operator(first,second)
    return operator

}

let Display = document.querySelector("#Display")
let clearButton = document.querySelector("div#Special #Clear")
let numberedButtons = document.querySelector("div#Numbers")
let symbolButtons = document.querySelector("div#Symbols")
const equalButton = document.querySelector("div#Special #Equal")
let TTOPeration = add;
let V1 = 0;
let V2 = 0;
let Value1 = 0;
let Value2 = 0;


function clearDisplay(){
    Display.textContent = ""
}
function updateDisplay(Value){
    Display.textContent += Value
}
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

clearButton.addEventListener("click", clearDisplay)
/// if pressed multiple times, delete first recorded number. i,e dblick


function recordValue1(){
    Value1 = Display.textContent
    return Value1
}
function recordValue2(){
    Value2 = Display.textContent
    return Value2
}

symbolButtons.addEventListener("click", (event)=> {
    let target = event.target
    switch(target.id){
        case "Plus":
            V1 = parseInt(recordValue1())
            console.log(V1)
            clearDisplay()
            TTOPeration = add
            break;
        case "Minus":
            V1 = parseInt(recordValue1())
            console.log(V1)
            clearDisplay()
            TTOPeration = subtract
            break;
        case "Divide":
            V1 = parseInt(recordValue1())
            console.log(V1)
            clearDisplay()
            TTOPeration = divide
            break;
        case "Multiply":
            V1 = parseInt(recordValue1())
            console.log(V1)
            clearDisplay()
            TTOPeration = multiply
            break;
        default:
            TTOPeration = add

    }
    console.log(TTOPeration(V1,1))
});




equalButton.addEventListener("click", () => {
    V2 = parseInt(recordValue2())
    Display.textContent = ((TTOPeration(V1, V2)))
});


