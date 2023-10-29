document.addEventListener('DOMContentLoaded', function () {
    const billTotalInput = document.getElementById('billTotal');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const tipAmountInput = document.getElementById('tipAmount');
    const tipRangeInput = document.getElementById('tipRange');
    const totalWithTipInput = document.getElementById('totalWithTip');
    const tipCalculatorForm = document.getElementById('tipCalculator');

    function updateTipValues() {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = parseFloat(tipRangeInput.value);

        if (!isNaN(billTotal) && billTotal >= 0) {
            const tipAmount = (billTotal * tipPercentage) / 100;
            const totalWithTip = billTotal + tipAmount;

            tipPercentageInput.value = tipPercentage.toFixed(0) + "%";
            tipAmountInput.value = "$" + tipAmount.toFixed(2);
            totalWithTipInput.value = "$" + totalWithTip.toFixed(2);
        } else {
            tipPercentageInput.value = '';
            tipAmountInput.value = '';
            totalWithTipInput.value = '';
        }
    }

    tipCalculatorForm.addEventListener('input', function () {
        updateTipValues();
    });

    billTotalInput.addEventListener('input', function () {
        const billTotalValue = billTotalInput.value.trim();
        if (billTotalValue !== '') {
            const parsedBillTotal = parseFloat(billTotalValue);
            if (isNaN(parsedBillTotal) || parsedBillTotal < 0) {
                alert('Please enter a valid input for the bill total.');
                billTotalInput.value = '';
            }
        }
        updateTipValues();
    });
});
