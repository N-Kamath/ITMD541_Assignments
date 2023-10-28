document.addEventListener('DOMContentLoaded', function () {
    const billTotalInput = document.getElementById('billTotal');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const tipAmountInput = document.getElementById('tipAmount');
    const tipRangeInput = document.getElementById('tipRange');
    const totalWithTipInput = document.getElementById('totalWithTip');
    const tipCalculatorForm = document.getElementById('tipCalculator');

    tipCalculatorForm.addEventListener('input', function () {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = parseFloat(tipRangeInput.value);
        const tipAmount = (billTotal * tipPercentage) / 100;
        const totalWithTip = billTotal + tipAmount;

        if (!isNaN(billTotal)) {
            tipPercentageInput.value = tipPercentage.toFixed(2);
            tipAmountInput.value = tipAmount.toFixed(2);
            totalWithTipInput.value = totalWithTip.toFixed(2);
        } else {
            tipPercentageInput.value = '';
            tipAmountInput.value = '';
            totalWithTipInput.value = '';
        }
    });
});
