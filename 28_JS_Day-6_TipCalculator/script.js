const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const numPeopleInput = document.getElementById("numPeople");
const calculateButton = document.getElementById("calculateButton");
const totalTipDisplay = document.getElementById("totalTip");
const tipPerPersonDisplay = document.getElementById("tipPerPerson");

calculateButton.addEventListener("click", calculateTip);

function calculateTip() {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);
  const numPeople = parseInt(numPeopleInput.value);
  console.log(typeof billAmount);

  if (
    Number.isNaN(billAmount) ||
    Number.isNaN(tipPercentage) ||
    Number.isNaN(numPeople)
  ) {
    alert("Please enter valid values for all fields");
    return;
  }
  const totalTip = (billAmount * tipPercentage) / 100;
  const tipPerPerson = totalTip / numPeople;
  totalTipDisplay.textContent = `Total Tip $${totalTip.toFixed(2)}`;
  tipPerPersonDisplay.textContent = `Tip for each member id : $${tipPerPerson.toFixed(
    2
  )}`;
}
