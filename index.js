let num1 = 0
let num2 = 0

let ptsHome = document.getElementById("score-home")
let ptsGuest = document.getElementById("score-guest")

ptsHome.textContent = num1
ptsGuest.textContent = num2

function add1Home(){
    num1 +=1
    ptsHome.textContent = num1
}

function add2Home(){
    num1 +=2
    ptsHome.textContent = num1
}

function add3Home(){
    num1 +=3
    ptsHome.textContent = num1
}

function add1Guest(){
    num2 +=1
    ptsGuest.textContent = num2
}

function add2Guest(){
    num2 +=2
    ptsGuest.textContent = num2
}

function add3Guest(){
    num2 +=3
    ptsGuest.textContent = num2
}