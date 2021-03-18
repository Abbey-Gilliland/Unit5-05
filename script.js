// This code sets the starting point of the variable of number.
let number = 0
// This code is what makes the calculate button work. clicking the button activates the function "multiplication"
document.getElementById('calculate').addEventListener('click', multiplication)
// Once the function is activated, it gets the value of the textbox and attributes it to the variable of number. It then attributes the variable to itself squared. It then replaces "answer appears here" with the area of the square.
function multiplication () {
  number = document.getElementById('side-length').value
  number = number * number
  document.getElementById('answer').innerHTML = number
}
