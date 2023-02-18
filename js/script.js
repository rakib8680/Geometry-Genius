

//1 Triangle area  Calculation
document.getElementById('triangle-button').addEventListener('click', function () {
    const triangleFirstValue = getInputFieldValue('b-value');
    const triangleSecondValue = getInputFieldValue('h-value');
    const areaOfTriangle = areaCalculation1(triangleFirstValue, triangleSecondValue);
    setResultValue('Triangle', areaOfTriangle);
})


//2. Rectangle area Calculation 
document.getElementById('rectangle-button').addEventListener('click', function () {
    const rectangleFirstValue = getInputFieldValue('rectangle-w-value');
    const rectangleSecondValue = getInputFieldValue('rectangle-i-value');
    const areaOfRectangle = areaCalculation2(rectangleFirstValue, rectangleSecondValue);
    setResultValue('Rectangle', areaOfRectangle);
})



//3. Rhombus area Calculation 
document.getElementById('rhombus-button').addEventListener('click', function () {
    const rhombusFirstValue = getInputFieldValue('rhombus-d1-value');
    const rhombusSecondValue = getInputFieldValue('rhombus-d2-value');
    const areaOfRhombus = areaCalculation1(rhombusFirstValue, rhombusSecondValue);
    setResultValue('Rhombus', areaOfRhombus);
})


//4. Parallelogram area Calculation 
document.getElementById('para-button').addEventListener('click', function () {
    const parallelogramFirstValue = getInputFieldValue('para-b-value');
    const parallelogramSecondValue = getInputFieldValue('para-h-value');
    const areaOfParallelogram = areaCalculation2(parallelogramFirstValue, parallelogramSecondValue);
    setResultValue('Parallelogram', areaOfParallelogram);
})


//1 Pentagon area  Calculation
document.getElementById('pentagon-button').addEventListener('click', function () {
    const pentagonFirstValue = getInputFieldValue('pentagon-p-value');
    const pentagonSecondValue = getInputFieldValue('pentagon-b-value');
    const areaOfPentagon = areaCalculation1(pentagonFirstValue, pentagonSecondValue);
    setResultValue('Pentagon', areaOfPentagon);
})


// Ellipse area calculation
document.getElementById('ellipse-button').addEventListener('click', function () {
    const ellipseFirstValue = getInputFieldValue('ellipse-a-value');
    const ellipseSecondValue = getInputFieldValue('ellipse-b-value');

    if (isNaN(ellipseFirstValue) || isNaN(ellipseSecondValue)) {
        alert('Please provide a valid number');
        return;
    }
    else {
        const areaOfEllipse = (Math.PI * ellipseFirstValue * ellipseSecondValue).toFixed(2);
        setResultValue('Ellipse', areaOfEllipse);
    }

})







// Add questions and answers Website with BLOG button ........................................................................
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'http://127.0.0.1:5500/blog.html'
})