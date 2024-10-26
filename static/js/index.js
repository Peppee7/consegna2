let tentativi = 5
let n = 0

function getRandom(min = 0, max = 100) {
    n = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(n)
    return n;
}

function callback(event) {
    let number = document.querySelector("[name=guess]")
    let colpo = number.value

    while(colpo === null || isNaN(colpo)) {
        colpo = prompt("Idovina il numero!!!")
    }
    colpo = parseInt(colpo)

    if(colpo == n) {
        console.log("CONGRATURAZIONI! Hai vinto.")
        msg.innerHTML = "WINNER"
        alert("CONGRATURAZIONI! Hai vinto.")
    } else if(colpo < n) {
        tentativi = tentativi - 1
        console.log("Troppo piccolo. Tentativi rimasti: " + tentativi + " | " + colpo)
        msg.innerHTML = "Troppo piccolo. <br>Tentativi a disposizione: " + tentativi
    } else {
        tentativi = tentativi - 1
        console.log("Troppo grande.  Tentativi rimasti: " + tentativi+ " | " + colpo)
        msg.innerHTML = "Troppo grande. <br>Tentativi a disposizione: " + tentativi
    }

    console.log(tentativi)
    if(tentativi == 5 || tentativi == 4) {
        bg.classList.add("greenBg")
    }else if(tentativi == 3 || tentativi == 2) {
        bg.classList.remove("greenBg")
        bg.classList.add("yellowBg")
    }else if(tentativi == 1) {
        bg.classList.remove("yellowBg")
        bg.classList.add("redBg")
    }else if(tentativi <= 0) {
        msg.innerHTML = "GAME OVER"
    }
}

getRandom(0, 100)

let bg = document.querySelector("[class=background]")
let msg = document.querySelector("#message")
let button = document.querySelector("[type=button]")
let win = false

bg.classList.add("greenBg")
msg.innerHTML = "Tentativi a dispozione: " + tentativi

if(tentativi >= 0) { 
    button.addEventListener("click", callback) 
}
