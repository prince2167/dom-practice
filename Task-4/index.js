let text = document.getElementById("text");
let btnOne = document.getElementById("btn-one");
let btnTwo = document.getElementById("btn-two");
let btnThree = document.getElementById("btn-three");

btnOne.addEventListener("click", () => {
  text.style = "color:green";
  console.log(text);
});
btnTwo.addEventListener("click", () => {
  text.style = "color:blue";
});
btnThree.addEventListener("click", () => {
  text.style = "color:red";
});
