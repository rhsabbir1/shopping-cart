function upDatePhnNumber(isIncres) {
    const phnInput = document.getElementById('phn-input');
    const phnInputValuestring = phnInput.value;
    const previousPhnInput = parseInt(phnInputValuestring)

    let newPhnInput;
    if (isIncres) {
        newPhnInput = previousPhnInput + 1;

    }
    else {
        if (previousPhnInput == 0) {
            return;
        }
        newPhnInput = previousPhnInput - 1;

    }
    return phnInput.value = newPhnInput;
}
function phnpriceUpdate(phnNumberValue) {
    const phnPrice = document.getElementById('phn-total-price')
    console.log(phnPrice.innerText, phnNumberValue)

    let newPhnPrice = phnNumberValue * 1219;
    phnPrice.innerText = newPhnPrice;
}

document.getElementById('phn-plus-btn').addEventListener('click', function () {
    const phnNumberValue = upDatePhnNumber(true)


    phnpriceUpdate(phnNumberValue)

    subTotalCalcaluted()

})

document.getElementById('phn-minus-btn').addEventListener('click', function () {
    const phnNumber = upDatePhnNumber(false)
    console.log(phnNumber)


    phnpriceUpdate(phnNumber)

    subTotalCalcaluted()


})