// background color change
const hexNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hexBtn = document.querySelector(".hexBtn");
const bodybcg = document.querySelector(".body-hex");
const hex = document.querySelector(".hex");

hexBtn.addEventListener("click", () => {
  let hexCol = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumber.length);
    hexCol += hexNumber[random];
    console.log(hexCol);
  }
  bodybcg.style.backgroundColor = hexCol;
  hex.textContent = hexCol;
});
