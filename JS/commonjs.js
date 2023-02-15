function getTExtElementByID(id) {

    const currentCaseElement = document.getElementById(id);
    const currentTotalString = currentCaseElement.innerText;
    const currentTotal = parseInt(currentTotalString)
    return currentTotal;

}

function calculatedTotal (id,value){
    const subTotalElement = document.getElementById(id);
    subTotalElement.innerText = value;
}
function subTotalCalcaluted(){
    const caseTotal = getTExtElementByID("case-price")
    const phnTotal = getTExtElementByID('phn-total-price')
    const subtotal = caseTotal + phnTotal;

    calculatedTotal('sub-total',subtotal)

    const taxamounttext = (subtotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxamounttext)

    calculatedTotal('tax', taxAmount)

    const totalAmount = subtotal + taxAmount;
    calculatedTotal('total-amount' , totalAmount)
    
}