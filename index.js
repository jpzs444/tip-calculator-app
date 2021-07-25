const inputBill = document.getElementById("input-bill");

const inputTipButtons = document.querySelectorAll(".input__tip__button");
const inputTipCustom = document.getElementById("input-tip-custom");

const inputChecker = document.querySelector(".input__checker");
const inputPeople = document.getElementById("input-people");

const outputTipAmount = document.getElementById("output-tip-amount");
const outputTotal = document.getElementById("output-total");

const buttonReset = document.getElementById("button-reset");

buttonReset.disabled = true; 

let tipPercentage = 0;
let tipCalculated = 0;

inputBill.addEventListener("input", function() {
    checkNumberOfPeople();
    getTipPerPerson();
    getTotalPerPerson();
})

for (let i = 0; i < inputTipButtons.length; i++) {
    inputTipButtons[i].addEventListener("click", function() {
        tipPercentage = parseFloat(inputTipButtons[i].textContent) / 100; 
        checkNumberOfPeople();
        getTipPerPerson();
        getTotalPerPerson();
        removeInputTipButtonActive();
        inputTipButtons[i].classList.add("input__tip__button--active");
        inputTipCustom.value = "";
    });
}

inputTipCustom.addEventListener("input", function() {
    tipPercentage = parseFloat(inputTipCustom.value) / 100;
    checkNumberOfPeople();
    getTipPerPerson();
    getTotalPerPerson();
    removeInputTipButtonActive();
});

inputPeople.addEventListener("input", function() {
    checkNumberOfPeople();
    getTipPerPerson();
    getTotalPerPerson();
}) 

buttonReset.addEventListener("click", resetTipCalculator);

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
    showTipPerPerson(tipPerPerson); 
    tipCalculated = tipPerPerson;
}

function getTotalPerPerson() {
    let totalPerPerson = (parseFloat(inputBill.value) / parseFloat(inputPeople.value)) + tipCalculated;
    showTotalPerPerson(totalPerPerson);
}

function showTipPerPerson(tip) {
    if (isNaN(tip)) {
        outputTipAmount.textContent = "$0.00";
    } else {
        outputTipAmount.textContent = "$" + tip.toFixed(2);
    }
}

function showTotalPerPerson(total) {
    if (isNaN(total)) {
        outputTotal.textContent = "$0.00";
    } else {
        outputTotal.textContent = "$" + total.toFixed(2);
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
    let defaultTipAndTotalPerPerson = "$0.00";
    inputBill.value = "";
    removeInputTipButtonActive();
    inputTipCustom.value = "";
    inputPeople.value = "";
    outputTipAmount.textContent = defaultTipAndTotalPerPerson;
    outputTotal.textContent = defaultTipAndTotalPerPerson;
    disableButtonReset();
    buttonReset.disabled = true;
}

function removeInputTipButtonActive() {
    for (let i = 0; i < inputTipButtons.length; i++) {
        inputTipButtons[i].classList.remove("input__tip__button--active");
    }
}