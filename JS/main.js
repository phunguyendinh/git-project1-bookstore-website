function handleNumberChange(action) {
  var numberDiv = document.getElementById("number");
  var number = parseInt(numberDiv.innerText);

  if (action === "increase") {
    numberDiv.innerText = number + 1;
  } else if (action === "decrease" && number > 1) {
    numberDiv.innerText = number - 1;
  }
}

// let selectedButton = null;
// function changeButtonStyle(button) {
//   if (selectedButton === button) {
//     button.classList.remove("clicked");
//     selectedButton = null;
//   } else {
//     if (selectedButton) {
//       selectedButton.classList.remove("clicked");
//     }
//     button.classList.add("clicked");
//     selectedButton = button;
//   }
// }
