const inputBill = document.getElementById("input-bill");

const inputTipButtons = document.querySelectorAll(".input__tip__button");
const inputTipCustom = document.getElementById("input-tip-custom");

const inputPeople = document.getElementById("input-people");

const outputTipAmount = document.getElementById("output-tip-amount");
const outputTotal = document.getElementById("output-total");

let isButtonClicked = false;

let tipPercentage = 0;
let tipResult = 0;

for (let i = 0; i < inputTipButtons.length; i++) {
    inputTipButtons[i].addEventListener("click", function() {
        tipPercentage = parseFloat(inputTipButtons[i].textContent) / 100; 
        getTipPerPerson(tipPercentage);
        getTotalPerPerson();
        inputTipCustom.value = "";
    });
}

inputTipCustom.addEventListener("input", function() {
    tipPercentage = parseFloat(inputTipCustom.value) / 100;
    getTipPerPerson(tipPercentage);
    getTotalPerPerson();
});

function getTipPerPerson(tipPercentage) {
    let tipPerPerson = parseFloat(inputBill.value) * tipPercentage / parseFloat(inputPeople.value);
    showTipPerPerson(tipPerPerson); 
    tipResult = tipPerPerson;
}

function getTotalPerPerson() {
    let totalPerPerson = (parseFloat(inputBill.value) / parseFloat(inputPeople.value)) + tipResult;
    showTotalPerPerson(totalPerPerson);
}

function showTipPerPerson(tip) {
    outputTipAmount.textContent = "$" + tip.toFixed(2);
}

function showTotalPerPerson(total) {
    outputTotal.textContent = "$" + total.toFixed(2);
}