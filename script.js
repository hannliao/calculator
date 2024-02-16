function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    console.log(op);
    switch (op) {
        case "+":
            ans.textContent = add(a, b);
            break;
        case "-":
            ans.textContent = subtract(a, b);
            break;
        case "×":
            ans.textContent = multiply(a, b);
            break;
        case "÷":
            ans.textContent = divide(a, b);
            break;
    }
    reset();
}

function reset() {
    a = "";
    b = "";
    op = "";
}

let a = "";
let b = "";
let op = "";

const ans = document.querySelector("#display");

const numbers = document.querySelectorAll(".number");
numbers.forEach(function(num) {
    num.addEventListener("click", function() {
        if (a === "") {
            ans.textContent = "";
        }
        if (op) {
            ans.textContent = "";
            b += num.textContent;
            ans.textContent = b;
         } else {
            a += num.textContent;
            ans.textContent = a;
         }
    });
});

const btns = document.querySelectorAll(".op");
btns.forEach(function(btn) {
    btn.addEventListener("click", () => op = btn.textContent);
});

const eq = document.querySelector("#equal");
eq.addEventListener("click", () => operate(a, b, op));

const clr = document.querySelector("#clear");
clr.addEventListener("click", () => {
    reset();
    ans.textContent = "8888"
});