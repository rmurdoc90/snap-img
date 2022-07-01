const x = document.getElementById("IMG");
x.childNodes.forEach((url) => {
  console.log(url);
  const newstring = `${url.currentSrc}`;
  const modString = newstring.slice(83);
  console.log(modString);
  url.classList.add(modString);
});
let classGrab = "SM-CB-CM-CPLT-6-BLK";
let step = `${classGrab}.jpg`;
let testGrab = document.getElementsByClassName(step);
console.log(testGrab);
const y = document.getElementById("IMG-2");
console.log(testGrab[0]);
var clone = testGrab[0].cloneNode(true);
y.appendChild(clone);
console.log(clone);
