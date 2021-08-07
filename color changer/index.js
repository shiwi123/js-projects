const btn = document.getElementById("btn");
const color = document.querySelector(".color-value");
// const main=document.body;
btn.addEventListener("click", function () {
  var r = Math.floor(Math.random() * 225);
  var g = Math.floor(Math.random() * 225);
  var b = Math.floor(Math.random() * 225);
  console.log(`rgb(${r},${g},${b})`);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  document.querySelector(".color-value").innerText= rgbToHex(r, g, b);

});

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}