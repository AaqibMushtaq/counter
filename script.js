let count = 0;
let value = document.querySelector("#value");
let btn = document.querySelectorAll(".btn");
// console.log(btn);
btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const clickedElementClass = e.currentTarget.classList;
    if (clickedElementClass.contains("decrease")) {
      count--;
    } else if (clickedElementClass.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "blue";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
