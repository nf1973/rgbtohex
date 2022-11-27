//RGCtoHex v1.0
//27th November 2022
//By Neil

var newHex;
const element = document.querySelector('.main');

function go(direction) {  
  var red = document.getElementById("red");
  var green = document.getElementById("green");
  var blue = document.getElementById("blue");
  var hex = document.getElementById("hex");
  var button = document.getElementById("button");

  if (direction == "rgbToHex") {
    let r = Math.floor(Number(red.value));
    red.value = Math.floor(r);
    let g = Math.floor(Number(green.value));
    green.value = Math.floor(g);
    let b = Math.floor(Number(blue.value));
    blue.value = Math.floor(b);
    
    if (r < 0 || r > 255 || isNaN(r) ) {
      red.value = "";
      return false;}
    if (g < 0 || g > 255 || isNaN(g) ) {
      green.value = "";
      return false;}
    if (b < 0 || b > 255 || isNaN(b)) {
      blue.value = "";
      return false;}  

    hex.value = decToHex(r)+decToHex(g)+decToHex(b);
  
  } else {
    r = parseInt(hex.value.substring(0,2),16);
    g = parseInt(hex.value.substring(2,4),16);
    b = parseInt(hex.value.substring(4),16);
    
    if (r < 0 || r > 255 || isNaN(r) ) {
      hex.value = "";
      return false;}
    if (g < 0 || g > 255 || isNaN(g) ) {
      hex.value = "";
      return false;}
    if (b < 0 || b > 255 || isNaN(b)) {
      hex.value = "";
      return false;} 
    
    red.value = r;
    green.value = g;
    blue.value = b;
    hex.value = hex.value.toUpperCase();  
  }
  setBgColor(hex.value);
}


function decToHex(dec) {
  val = dec.toString(16);
  while (val.length < 2) {
      val = "0"+val;
  }
  return val.toUpperCase();
}

function setBgColor(col) {
  element.style.backgroundColor = '#'+col;
}
