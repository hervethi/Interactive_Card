function checkInputEmpty(tag) {
  if (document.getElementById(tag).value == "") {
    return true;
  }
}

function testNumbers(regex, tag) {
  if (regex.test(tag.value)) {
    return true;
  }
}

function showInputEmpty(inputTag, messageTag) {
  document.getElementById(inputTag).style.border = "1px solid red";
  document.getElementById(messageTag).textContent = "Can't be blank";
}

function showInputNumbers(inputTag, messageTag) {
  document.getElementById(inputTag).style.border = "1px solid red";
  document.getElementById(messageTag).textContent =
    "Wrong format, numbers only";
}

function showValidateInput(inputTag, messageTag) {
  document.getElementById(inputTag).style.border = "";
  document.getElementById(messageTag).textContent = "";
}

function checkCardholderNameInput() {
  if (checkInputEmpty("cardholder_name")) {
    showInputEmpty("cardholder_name", "error_name");
    return;
  }
  showValidateInput("cardholder_name", "error_name");
}

function checkInputNumbers(regex, inputTag, messageTag) {
  if (checkInputEmpty(inputTag)) {
    showInputEmpty(inputTag, messageTag);
    return;
  }
  if (!testNumbers(regex, document.getElementById(inputTag))) {
    showInputNumbers(inputTag, messageTag);
    return;
  }
  showValidateInput(inputTag, messageTag);
}

function checkAllInputsNumber() {
  const regex_card_number = /^(\d{16})$/;
  const regex_month = /^(0?[1-9]|1[012])$/;
  const regex_year = /^(\d{2})$/;
  const regex_cvc = /^(\d{3})$/;
  checkInputNumbers(regex_card_number, "cardholder_number", "error_number");
  checkInputNumbers(regex_month, "exp_date_month", "error_date");
  checkInputNumbers(regex_year, "exp_date_year", "error_date");
  checkInputNumbers(regex_cvc, "cvc", "error_cvc");
}

function checkInputs() {
  let submitButton = document.getElementById("submit_button");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    checkCardholderNameInput();
    checkAllInputsNumber();
  });
}

checkInputs();
