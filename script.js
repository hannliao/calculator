function add(a, b) {
    return round(+a + +b);
}

function subtract(a, b) {
    return round(a - b);
}

function multiply(a, b) {
    return round(a * b);
}

function divide(a, b) {
    return round(a / b);
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

function reset() {
    a = "";
    b = "";
    op = "";
    enableDecimal();
}

function enableDecimal() {
    dec.disabled = false;
}

function disableDecimal() {
    dec.disabled = true;
}

function round(n) {
    let rounded = parseFloat(n).toFixed(7).replace(/\.?0*$/, '');
    let roundedStr = rounded.toString();
    return roundedStr;
}

let a = "";
let b = "";
let op = "";

const ans = document.querySelector("#display");
const dec = document.querySelector("#decimal");

const numbers = document.querySelectorAll(".number");
numbers.forEach(function(num) {
    num.addEventListener("click", function() {
        if (op) {
            if (b.includes(".")) disableDecimal();
            ans.textContent = "";
            b += num.textContent;
            ans.textContent = b;
            console.log("a: " + a + " b: " + b + " ans: " + ans.textContent);
         } else {
            if (a.includes(".")) disableDecimal();
            a += num.textContent;
            ans.textContent = a;
            console.log("a: " + a + " b: " + b + " ans: " + ans.textContent);
         }
    });
});



const btns = document.querySelectorAll(".op");
btns.forEach(function(btn) {
    btn.addEventListener("click", () => {
        operate(a, b, op);
        reset();
        a = ans.textContent;
        op = btn.textContent;
        console.log("a: " + a + " b: " + b + " ans: " + ans.textContent);
    });
});

const eq = document.querySelector("#equal");
eq.addEventListener("click", () => {
    operate(a, b, op);
    reset();
    console.log("a: " + a + " b: " + b + " ans: " + ans.textContent);
});

const clr = document.querySelector("#clear");
clr.addEventListener("click", () => {
    reset();
    ans.textContent = "0"
});