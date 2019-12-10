function getInputValue() {
  // Selecting the input element and get its value 
  var inputVal = "https://dve4ever.github.io/search?q=" + document.getElementById("myInput").value;
  // Displaying the value
  window.open(inputVal)
}
