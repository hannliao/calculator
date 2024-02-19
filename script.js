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
            ans.textContent = (b == 0) ? "nope" : divide(a, b);
            break;
    }
}

let a = "";
let b = "";
let op = "";

const ans = document.querySelector("#display");

const numbers = document.querySelectorAll(".number");
numbers.forEach(function(num) {
    num.addEventListener("click", function() {
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
    btn.addEventListener("click", () => {
        operate(a, b, op);
        a = ans.textContent;
        b = "";
        op = btn.textContent;
    });
});

const eq = document.querySelector("#equal");
eq.addEventListener("click", () => operate(a, b, op));

const clr = document.querySelector("#clear");
clr.addEventListener("click", () => {
    a = "";
    b = "";
    op = "";
    ans.textContent = "0"
});