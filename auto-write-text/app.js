const text = "This is an auto written text";

let index = 0;

function autoText() {
  document.body.innerHTML = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}
//ms 
setInterval(autoText, 100);
