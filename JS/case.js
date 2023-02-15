function updateCaseNumber(isIncres) {
    const inputFiled = document.getElementById('case-input');
    const inputValuestring = inputFiled.value;
    const previousinputValue = parseInt(inputValuestring)
    let newInputValue;
    if (isIncres) {
        newInputValue = previousinputValue + 1;
    }
    else {
        if (previousinputValue <= 0) {
            return;
        }
        newInputValue = previousinputValue - 1;
    }
    inputFiled.value = newInputValue;
    return newInputValue;
}
function priceUpdate( inputNUmber ) {
    const casePrice = document.getElementById('case-price')
    
    let newCasePRice = inputNUmber * 56;
    casePrice.innerText = newCasePRice;
}

document.getElementById('case-plus-btn').addEventListener('click', function () {

    const casePlusInputNumber = updateCaseNumber(true)

    priceUpdate(casePlusInputNumber)

   
   subTotalCalcaluted()

})

document.getElementById('case-minus-btn').addEventListener('click', function () {
    const caseMinusInputNUmber = updateCaseNumber(false)

    priceUpdate(caseMinusInputNUmber)

    subTotalCalcaluted()
})