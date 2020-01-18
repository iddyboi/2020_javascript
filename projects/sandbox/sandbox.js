let fname = document.querySelector("#fname").value;
let lname = document.querySelector("#lname").value;

let button = document.querySelector("button").addEventListener("click", () => {
  document.querySelector(".fullname").textContent = "hello";
});

console.log(fname);
