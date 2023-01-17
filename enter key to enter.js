let userInput = document.getElementById("userInput");
let keyCodeList = document.getElementById("keyCodeList");

let value = userInput.value;
userInput.addEventListener("keyup", function(event) {
    keyCodeList.textContent = event.key;

});