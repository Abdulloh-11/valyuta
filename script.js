var natija = document.querySelector(".natija");

var valyuta = prompt("qaysi vayutaga almashish kerek dollar :a-dollar b-rubl d-euro;  a va b va d qiymatlarni qabul qiladi");
var mablag = +prompt("Mablag'ingizni kiriting");


var a = 11200;
var b = 11800;
var d = 170;



var a = mablag / a;
var d = mablag / d;
var b = mablag / b;


var dollarkurs = ` ${a} dollar bo'ladi`;
var eurokurs = ` ${d} euro bo'ladi`;
var rublkurs = ` ${b} rubl bo'ladi`;


if (valyuta === "a") {
    natija.textContent = dollarkurs;
  } else if (valyuta === "d") {
    natija.textContent = eurokurs;
  } else if (valyuta === "b") {
    natija.textContent = rublkurs;
  }





 
