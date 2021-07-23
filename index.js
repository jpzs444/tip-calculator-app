const outputTipAmount = document.getElementById("output-tip-amount");
const outputTotal = document.getElementById("output-total");

const inputBill = document.getElementById("input-bill");

const buttonTip5 = document.getElementById("button-tip-5");
const buttonTip10 = document.getElementById("button-tip-10");
const buttonTip15 = document.getElementById("button-tip-15");
const buttonTip25 = document.getElementById("button-tip-25");
const buttonTip50 = document.getElementById("button-tip-50");
const inputTipCustom = document.getElementById("input-tip-custom");

const inputPeople = document.getElementById("input-people");

let isButtonClicked = false;


inputTipCustom.addEventListener("input", getTipPerPerson);

function getTipPerPerson() {
    let tipPerPerson = parseFloat(inputBill.value) * (parseFloat(inputTipCustom.value) / 100) / parseFloat(inputPeople.value);
    let convertedTip = convertToUsd(tipPerPerson);
    showTipPerPerson(convertedTip);
}

function convertToUsd(number) {
    return number.toLocaleString("en-us", {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    })
}

function showTipPerPerson(tip) {
    outputTipAmount.textContent = "$" + tip;
}