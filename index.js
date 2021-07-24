const outputTipAmount = document.getElementById("output-tip-amount");
const outputTotal = document.getElementById("output-total");

const inputBill = document.getElementById("input-bill");

// const buttonTip5 = document.getElementById("button-tip-5");
// const buttonTip10 = document.getElementById("button-tip-10");
// const buttonTip15 = document.getElementById("button-tip-15");
// const buttonTip25 = document.getElementById("button-tip-25");
// const buttonTip50 = document.getElementById("button-tip-50");

const inputTipButtons = document.querySelectorAll("input__tip__button");

const inputTipCustom = document.getElementById("input-tip-custom");

const inputPeople = document.getElementById("input-people");

let isButtonClicked = false;

let tipPercentage = 0;
let tipResult = 0;

inputTipCustom.addEventListener("input", function() {
    getTipPerPerson();
    getTotalPerPerson();
});

function getTipPerPerson() {
    let tipPerPerson = parseFloat(inputBill.value) * (parseFloat(inputTipCustom.value) / 100) / parseFloat(inputPeople.value);
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