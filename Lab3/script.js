var form = document.getElementById('calculator');

function calculate() {
    var billTotal = parseFloat(form['bill-total'].value);
    var tipPercentage = form['tip-slider'].value;
    if (isNaN(billTotal)) {
        alert('Please enter a valid number for the Bill Total');
        return;
    }
    var tipAmount = billTotal * (tipPercentage / 100);
    var totalBill = billTotal + tipAmount;
    form['tip-amount'].value = tipAmount.toFixed(2);
    form['total-bill'].value = totalBill.toFixed(2);
}

form.addEventListener('input', calculate);
form.addEventListener('change', calculate);
