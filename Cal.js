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
    }};

function operate(firstNum,operative,secondNum){
    operative = isOperative(operative)
    return operative(firstNum, secondNum);    
}

console.log(operate(1,add,5))

/// My alternative plan was to append an anonymous reduce function
/// so that operation doesn't have to take any implicit arguments

console.log(operate(5,multiply,5))


Display = document.querySelector("#Display")
Display.textContent += 45533

function updateDisplay(number){
        Display.textContent += number
}
function clearDisplay(){
    Display.textContent = ""
}
clearDisplay()

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