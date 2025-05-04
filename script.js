const billInput = document.querySelector("#bill");
const tipBottons = Array.from(document.getElementsByClassName("tip"));
const peopleInput = document.querySelector("#people");
const tipResult = document.querySelector(".tip-result");
const totalResult = document.querySelector(".total-result");
const reset = document.getElementById("reset");

let billValue = 0;
let tipValue = 0;
let peopleValue = 0;

function createAlert(alertMessage, color = "red") {
  let alert = document.createElement("p");
  alert.textContent = alertMessage;
  alert.style.cssText = `color: ${color};margin:0`;
  return alert;
}
let currentAlert = null;


billInput.addEventListener("input", (event) => {
  if (!isNaN(event.target.value) && event.target.value !== "") {
    billValue = parseFloat(event.target.value);
  } else {
    billValue = "";
  }
  calculation();
});

tipBottons.forEach((button) => {
  button.addEventListener("click", (event) => {
    tipValue = parseInt(event.target.textContent);
    calculation();
  });
});

peopleInput.addEventListener("input", (event) => {
  if (!isNaN(event.target.value) && event.target.value !== "") {
    peopleValue = parseInt(event.target.value);
  } else {
    peopleValue = "";
  }
  calculation();
});

function calculation() {
  if (peopleValue !== 0 && peopleValue !== "") {
    let tipAmount = (
      (billValue * (tipValue / 100)) /
      peopleValue
    ).toFixed(2);
    let totalAmount = (
      Number(tipAmount) +
      billValue / peopleValue
    ).toFixed(2);

    tipResult.textContent = `$${tipAmount}`;
    totalResult.textContent = `$${totalAmount}`;
  } else {
    tipResult.textContent = `$0.00`;
    totalResult.textContent = `$0.00`;
  }
  if (currentAlert) currentAlert.remove();

  if (billValue === "") {
    currentAlert = createAlert("Please enter bill amount");
    billInput.insertAdjacentElement("afterend", currentAlert);
  } else if (billValue === 0) {
    currentAlert = createAlert("Number of people can't be zero");
    billInput.insertAdjacentElement("afterend", currentAlert);
  } else {
    currentAlert = null;
  }
}

reset.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  billValue = 0;
  tipValue = 0;
  peopleValue = 0;

  tipResult.textContent = `$0.00`;
  totalResult.textContent = `$0.00`;

  if (currentAlert) currentAlert.remove();
  currentAlert = null;
});
