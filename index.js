// Declaration 

const inputBill = document.getElementById("input-bill");
const inputTipButtons = document.querySelectorAll(".input__tip__button");
const inputTipCustom = document.getElementById("input-tip-custom");
const inputChecker = document.querySelector(".input__checker");
const inputPeople = document.getElementById("input-people");
const outputTipAmount = document.getElementById("output-tip-amount");
const outputTotal = document.getElementById("output-total");
const buttonReset = document.getElementById("button-reset");

// Initialization

buttonReset.disabled = true; 
let tipPercentage = 0;
let tipCalculated = 0;

// Add Event Listener

inputBill.addEventListener("input", calculate);

for (let i = 0; i < inputTipButtons.length; i++) {
    inputTipButtons[i].addEventListener("click", function() {
        tipPercentage = parseFloat(inputTipButtons[i].textContent) / 100; 
        calculate();
        removeInputTipButtonActive();
        inputTipButtons[i].classList.add("input__tip__button--active");
        inputTipCustom.value = "";
    });
}

inputTipCustom.addEventListener("input", function() {
    if (inputTipCustom.value == "") {
        tipPercentage = 0;
    } else {
        tipPercentage = parseFloat(inputTipCustom.value) / 100;
    }
    calculate();
    removeInputTipButtonActive();
});

inputPeople.addEventListener("input", calculate); 
buttonReset.addEventListener("click", resetTipCalculator);

// Functions

function calculate() {
    checkNumberOfPeople();
    getTipPerPerson();
    getTotalPerPerson();
}

function checkNumberOfPeople() {
    if (inputPeople.value === 0 || inputPeople.value === "") {
        inputChecker.textContent = "Can't be zero";
        inputPeople.className = "input-people--error";
        disableButtonReset();
    } else {
        inputChecker.textContent = "";
        inputPeople.className = "input-people--no-error";
        enableButtonReset();
    }
}

function getTipPerPerson() {
    let tipPerPerson = parseFloat(inputBill.value) * tipPercentage / parseFloat(inputPeople.value);
    showResults(outputTipAmount, tipPerPerson); 
    tipCalculated = tipPerPerson;
}

function getTotalPerPerson() {
    let totalPerPerson = (parseFloat(inputBill.value) / parseFloat(inputPeople.value)) + tipCalculated;
    showResults(outputTotal, totalPerPerson);
}

function showResults(outputDOM, result) {
    if (isNaN(result)) {
        outputDOM.textContent = "$0.00";
    } else {
        outputDOM.textContent = "$" + result.toFixed(2);
    }
}

function enableButtonReset() {
    buttonReset.disabled = false;
    buttonReset.className = "button-reset--active";
}

function disableButtonReset() {
    buttonReset.disable = true; 
    buttonReset.className = "button-reset--inactive";
}

function resetTipCalculator() {
    inputBill.value = "";
    removeInputTipButtonActive();
    inputTipCustom.value = "";
    inputPeople.value = "";
    tipPercentage = 0;
    tipCalculated = 0;
    outputTipAmount.textContent = "$0.00";
    outputTotal.textContent = "$0.00";
    disableButtonReset();
    buttonReset.disabled = true;
}

function removeInputTipButtonActive() {
    for (let i = 0; i < inputTipButtons.length; i++) {
        inputTipButtons[i].classList.remove("input__tip__button--active");
    }
}