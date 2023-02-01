const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let codeLength = document.getElementById("code-length")

function randomNumber() {
    return Math.floor(Math.random() * characters.length)
}

function generate() {
    if(codeLength.value == 0) {
        codeLength.style.border = "solid 2px #ff0000"
    } else {
        codeLength.style.border = "none"
    }
    let randomNumArr = []
    for(let i=0; i < codeLength.value; i++) {
        randomNumArr.push(characters[randomNumber()])
    }
    return randomNumArr.join("")
}

function renderPasswords() {
    password1El.textContent = generate()
    password2El.textContent = generate()
}

 

