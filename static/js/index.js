let tentativi = 0
let n = 0

function getRandom(max) {
    n = Math.floor(Math.random() * max)

    return n;
}

getRandom(100)
alert(n)
while(tentativi < 5) {
    let colpo = prompt("Idovina il numero!!!")
    while(colpo === null || isNaN(colpo)) {
        colpo = prompt("Idovina il numero!!!")
    }
    tentativi++
    colpo = parseInt(colpo)

    if(colpo == n) {
        console.log("CONGRATURAZIONI! Hai vinto.")
        tentativi = 5
    } else if(colpo < n) {
        console.log("Troppo piccolo. Tentativi rimasti: " + (5 - tentativi) + " | " + colpo)
    } else {
        console.log("Troppo grande.  Tentativi rimasti: " + (5 - tentativi) + " | " + colpo)
    }
}

alert("Hai perso. Il numero da indovinare era: " + n)