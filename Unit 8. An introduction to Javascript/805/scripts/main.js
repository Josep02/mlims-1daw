"use strict";

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function selectAll() {
    let checkboxes = document.querySelectorAll('input[type=checkbox]');

    for (let index = 0; index < checkboxes.length; index++) {
        const element = checkboxes[index];
        element.checked = true;        
    }
}

function deselectAll() {
    let checkboxes = document.querySelectorAll('input[type=checkbox]');

    for (let index = 0; index < checkboxes.length; index++) {
        const element = checkboxes[index];
        element.checked = false;        
    }
}

function callGenerateCheckboxes(){
    let inputNumber = document.querySelector("#input-number");
    removeCheckboxes();
    generateCheckboxes(inputNumber.value);
}

function removeCheckboxes() {
    let checkList = document.querySelector("#check-list");
    let listItems = checkList.querySelectorAll('li');

    for (let i = 0; i < listItems.length; i++) {
        let listItem = listItems[i];        
        listItem.remove();
    }
}

function generateCheckboxes(number) {
    let checkList = document.querySelector("#check-list");

    for (let i = 0; i < number; i++) {
        let listItem = document.createElement("li");        
        checkList.appendChild(listItem);

        let number = random(0,99);

        let checkboxLabel = document.createElement('label');
        let checkboxInput = document.createElement('input');
        checkboxInput.setAttribute("type", "checkbox");
        checkboxInput.type = "checkbox";
        checkboxInput.value = number;

        checkboxLabel.appendChild(checkboxInput);
        checkboxLabel.appendChild(document.createTextNode(number));
        listItem.appendChild(checkboxLabel);
    }

}

function main() {

    let btnSelectAll = document.querySelector("#button-select-all");
    let btnDeselectAll = document.querySelector("#button-deselect-all");
    let btnGenerate = document.querySelector("#button-generate");

    btnSelectAll.addEventListener('click', selectAll);
    btnDeselectAll.addEventListener('click', deselectAll);
    btnGenerate.addEventListener('click', callGenerateCheckboxes);    

}

document.addEventListener('DOMContentLoaded', main);