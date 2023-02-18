

// function for getting value from input field and convert to Number 
function getInputFieldValue(byID) {
    const firstInputValue = document.getElementById(byID);
    const firstValueString = firstInputValue.value;
    const firstValue = parseFloat(firstValueString);
    firstInputValue.value = '';
    return firstValue;

}



// Function to calculate Triangle, Rhombus, Pentagon 
function areaCalculation1(value1, value2) {
    if (isNaN(value1) || isNaN(value2)) {
        alert('Please provide a valid number');
        return;
    }
    else {
        const area = (0.5 * value1 * value2).toFixed(2);
        return area;
    }
}



// function to calculate Rectangle, Parallelogram
function areaCalculation2(value1, value2) {
    if (isNaN(value1) || isNaN(value2)) {
        alert('Please provide a valid number');
        return;
    }
    else {
        const area = (value1 * value2).toFixed(2);
        return area;
    }
}



// set Calculation result inside the container 
function setResultValue(name, value) {
    const resultContainer = document.getElementById('result-container');
    // create new list element
    const list = document.createElement('li');
    // append new list into result container 
    if (typeof name == 'string' && typeof value == 'string') {
        list.innerText = (name + '   -   ' + '  :  ' + '  ' + value + 'cm²');
        resultContainer.appendChild(list);
    }

}



//random color generator

randomColor = function(e) {
    e.style.background =  "#" + (Math.random() * 0xFFFFFF<<0).toString(16);
}