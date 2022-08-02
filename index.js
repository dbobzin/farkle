let incrementEl = document.getElementById("count-el");
let doubleIncrementEl = document.getElementById("count-el");
let tripleIncrementEl = document.getElementById("count-el");

let oppIncrementEl = document.getElementById("count-el");
let oppDoubleIncrementEl = document.getElementById("count-el");
let oppTripleIncrementEl = document.getElementById("count-el");
let score = 0;

//set of increments 50 - 1000
function increment() {
score += 50;
incrementEl.textContent = score;
}

function doubleIncrement() {
    score += 100;
    doubleIncrementEl.textContent = score;
}

function tripleIncrement() {
    score += 200;
    tripleIncrementEl.textContent = score;
}

function reset () {
    incrementEl.textContent = 0; 
    score = 0; 
}

function oppIncrement() {
    score += 300;
    oppIncrementEl.textContent = score;
    }
    
    function oppdoubleIncrement() {
        score += 500;
        oppDoubleIncrementEl.textContent = score;
    }
    
    function opptripleIncrement() {
        score += 1000;
        oppTripleIncrementEl.textContent = score;
    }
