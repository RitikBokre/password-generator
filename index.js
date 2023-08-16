const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const pwd1El = document.querySelector(".pwd-1");
const pwd2El = document.querySelector(".pwd-2");
const pwdLengthEL = document.querySelector(".pwd-length");

function generatePwd() {
    let str1 = [];
    let str2 = [];
    for (let i = 0; i < pwdLengthEL.value; i++) {
        str1.push(getRandomChar());
        str2.push(getRandomChar());
    }
    pwd1El.textContent = str1.join("");
    pwd2El.textContent = str2.join("");
}

function getRandomChar() {
    const num = Math.floor(Math.random() * characters.length);
    return characters[num];
}

const spans = document.querySelectorAll(".pwd");

spans.forEach(span => {
    span.addEventListener("copy", function (event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", span.textContent);
        }
    });
    span.onclick = function () {
        document.execCommand("copy");
    }
});