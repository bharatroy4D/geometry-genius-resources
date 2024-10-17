// triangle function
function triangleCalculation(){
    const base = getInputFieldById('triangle-base');
    const height = getInputFieldById('triangle-height');
    const aria = 0.5*base*height;
    // triangle aria display
    setInnerTextValue('triangle-aria',aria);
    
}
// rectangle function
function rectangleCalculation(){
    const height = getInputFieldById('rectangle-height');
    const length = getInputFieldById('rectangle-length');
    const aria = height*length;
    // rectangle aria display
    setInnerTextValue('rectangle-aria',aria);
}
// parallelogram function
function parallelogramCalculation(){
    const base = getInputFieldById('parallelogram-base');
    const height = getInputFieldById('parallelogram-height');
    const aria = base*height;
    // rectangle aria display
    setInnerTextValue('parallelogram-aria',aria);
}
// Rhombus card function
function RhombusCalculation(){
    const d1 = getInputFieldById('Rhombus-d1');
    const d2 = getInputFieldById('Rhombus-d2');
    const aria = 0.5*d1*d2;
    // Rhombus aria display
    setInnerTextValue('Rhombus-aria', aria);
}

// similar type input by innerText function
function getInputFieldById(inputId){
    const inputFieldId = document.getElementById(inputId);
    const inputFieldValue = inputFieldId.value;
    inputFieldId.value = '';
    const value = parseFloat(inputFieldValue);
    return value;
}

// input innerText value setup
function setInnerTextValue(elementId, aria){
    const element = document.getElementById(elementId);
        element.innerText = aria;
}


