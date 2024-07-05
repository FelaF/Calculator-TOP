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


