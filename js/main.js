//GLOBAL VARIABLES
let artSeen = document.getElementById("artSeen");
let shoppingListEl = document.getElementById("shoppinglist");


//ART VARIABLES
let mountainRetreatEl = document.getElementById("mountainRetreatId");
let sonofManEl = document.getElementById("sonofManId");
let winterNightEl = document.getElementById("winterNightId");
let laDecalomanieEl = document.getElementById("laDecalomanieId");

//prime page
document.getElementById("tabtwo").style.display = "none";
document.getElementById("tabthree").style.display = "none";
myStorage = window.localStorage;



//clicking tabs
function tabOneOpen() {
  document.getElementById("tabone").style.display = "block";
  document.getElementById("tabtwo").style.display = "none";
  document.getElementById("tabthree").style.display = "none";
}

function tabTwoOpen() {
  document.getElementById("tabone").style.display = "none";
  document.getElementById("tabtwo").style.display = "block";
  document.getElementById("tabthree").style.display = "none";
  loadlist();
}

function tabThreeOpen() {
  document.getElementById("tabone").style.display = "none";
  document.getElementById("tabtwo").style.display = "none";
  document.getElementById("tabthree").style.display = "block";
}


