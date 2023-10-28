const billInput = document.getElementById("bill");
const tipRange = document.getElementById("tip");
const tipPercentOutput = document.getElementById("tip-percent");
const tipAmountOutput = document.getElementById("tip-amount");
const totalAmountOutput = document.getElementById("total-amount");

billInput.addEventListener("input", calculateTip);
tipRange.addEventListener("input", calculateTip);

function calculateTip() {
  const bill = parseFloat(billInput.value);
  const tipPercent = tipRange.value;

  if (isNaN(bill)) {
    alert("Enter a valid input");
    billInput.value = "";
  } else {
    const totalTip = (bill * tipPercent) / 100;
    const total = bill + totalTip;

    billInput.value = bill.toFixed(2);
    tipPercentOutput.textContent = tipPercent + "%";
    tipAmountOutput.textContent = totalTip.toFixed(2) + "$";
    totalAmountOutput.textContent = total.toFixed(2) + "$";
  }
}

calculateTip();
