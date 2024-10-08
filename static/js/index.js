let tentativi = 0
let n = 0

function getRandom(min = 0, max = 100) {
    n = Math.floor(Math.random() * (max - min + 1) - min)

    return n;
}

getRandom(0, 100)

function handleClick(event) { 

    while(tentativi < 5) {
        let colpo = document.querySelector("#guess")
        console.log(userField.value)
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
}

btn.addEventListener("click", handleClick)