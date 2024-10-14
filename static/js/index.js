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
    tentativi++
    colpo = parseInt(colpo)

    if(colpo == n) {
        console.log("CONGRATURAZIONI! Hai vinto.")
        tentativi = 0
        alert("CONGRATURAZIONI! Hai vinto.")
    } else if(colpo < n) {
        console.log("Troppo piccolo. Tentativi rimasti: " + (5 - tentativi) + " | " + colpo)
    } else {
        console.log("Troppo grande.  Tentativi rimasti: " + (5 - tentativi) + " | " + colpo)
    }
}

getRandom(0, 100)

let button = document.querySelector("[type=button]")
while(tentativi != 0) { 
    button.addEventListener("click", callback)
    tentativi = tentativi - 1
}