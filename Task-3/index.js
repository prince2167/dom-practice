let text = document.getElementById("text");
let btnOne = document.getElementById("btn-one");
let btnTwo = document.getElementById("btn-two");
let btnThree = document.getElementById("btn-three");

let fontSize;

btnOne.addEventListener("click", () => {
  fontSize = 32;
  text.style = `font-size:${fontSize}px`;
  console.log(text);
});
btnTwo.addEventListener("click", () => {
  fontSize = 22;
  text.style = `font-size:${fontSize}px`;
});
btnThree.addEventListener("click", () => {
  fontSize = 20;
  text.style = `font-size:${fontSize}px`;
});


