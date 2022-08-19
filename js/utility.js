
// getElementAmount function 

function getElementAmount(elementId) {
    const getElement = document.getElementById(elementId);
    const getElementText = getElement.innerText;
    const getElementAmount = parseFloat(getElementText);
    return getElementAmount;
}

// getInputFieldAmount function

function getInputFieldAmount(inputFieldId){
    const getInputField = document.getElementById(inputFieldId);
    const getInputFieldText = getInputField.value;
    const getInputFieldAmount = parseFloat(getInputFieldText);
    return getInputFieldAmount;
}

// setNewAmount function

function setNewAmount(elementId, newAmount) {
    const element = document.getElementById(elementId);
    element.innerText = newAmount;
    
}