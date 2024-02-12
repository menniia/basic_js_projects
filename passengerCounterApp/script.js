let countElmnt = document.getElementById("count-elmnt");
let saveElmnt = document.getElementById("save-elmnt");

let count = 0;

function increment() {
  count += 1;
  countElmnt.textContent = count;
}

function save() {
  let savedCount = " " + count + " - ";
  saveElmnt.textContent += savedCount;
  countElmnt.textContent = 0;
  count = 0;
}