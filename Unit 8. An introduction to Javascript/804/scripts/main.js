"use strict";

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function main() {

    function generateNumbers() {
        inputFirstNumber.value = random(1, 10);
        inputSecondNumber.value = random(1, 10);
    }

    let buttonMultiply = document.querySelector('#button-multiply');
    let buttonDivide = document.querySelector('#button-divide');

    let inputFirstNumber = document.querySelector("#first-number");
    let inputSecondNumber = document.querySelector("#second-number");

    generateNumbers();

    let operationsList = document.createElement('ul');
    document.body.append(operationsList);

    function multiply() {
        let firstNumber = Number(inputFirstNumber.value);
        let secondNumber = Number(inputSecondNumber.value);

        let listItem = document.createElement('li');
        listItem.innerHTML = `${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`;
        operationsList.append(listItem);
    }

    function divide() {
        let firstNumber = Number(inputFirstNumber.value);
        let secondNumber = Number(inputSecondNumber.value);

        let listItem = document.createElement('li');
        listItem.innerHTML = `${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`;
        operationsList.append(listItem);
    }


    buttonMultiply.addEventListener('click', multiply);
    buttonDivide.addEventListener('click', divide);

    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', generateNumbers);

    }
}
    document.addEventListener('DOMContentLoaded', main);