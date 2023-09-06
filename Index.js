const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingcount = document.getElementById("remaining-counter");

let userChar = 0;

//to update char on screen
const updateCounter = () => {
    userChar = charval.value.length;
    totalCount.innerText = userChar;
    remainingcount.innerText = 150 - userChar;
};

charval.addEventListener("keyup", () => updateCounter());

//to copy the text
const copyText = () => {
    charval.select();
    charval.setSelectionRange(0,99999);
    navigator.clipboard.writeText(charval.Value);
};