const button = document.getElementById("btn");
const file = document.getElementById("file");
const click = document.getElementById("click");
const close = document.getElementById("close");
const color_input = document.getElementById("color-input");
const color = document.getElementById("color");

button.addEventListener("click", () => {
  file.click();
});

click.addEventListener("click", (e) => {
  const value = prompt("Submit your name");
  const el = document.createElement("h1");
  el.innerHTML = value;
  document.body.append(el);
});

close.addEventListener("click", (e) => {
  // window.location.replace("http://www.google.com")
  // window.history.forward()
  // alert("Happy learning");
  audio.play();
});

color.addEventListener("click", (e) => {
  color_input.click();
});

color_input.addEventListener("input", (e) => {
  const color_value = e.target.value;
  document.body.style.backgroundColor = color_value;
});

const audio = new Audio("./assets/12.mp3")