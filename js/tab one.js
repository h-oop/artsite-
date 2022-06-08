//Art arrays priming
let imgNameArray = ["MountainRetreat", "SonofMan", "WinterNight", "LaDecalcomanie"]
let artArray = [mountainRetreatEl, sonofManEl, winterNightEl, laDecalomanieEl]
let nameArray = ["Mountain Retreat", "The Son of Man", "Winter Night", "La Décalcomanie"]
let artistArray = ["Bob Ross", "René Magritte", "Bob Ross", "René Magritte"]
let orientationArray = ["Landscape", "Portrait", "Landscape", "Landscape"]
let sizeArray = ["36x24", "45.67x89", "12x18", "23 3/5x15 3/4"]
let priceArray = ["$3", "$10", "$4", "$2"]

//collection of all the array information ^
let finalArtArray = []

//button to initiate search based upon selected select option
let sortBtnEl = document.getElementById("sortbtn");


//set up default page
function objectAllArt() {
  for (let i=0; i < artArray.length; i++) {
    finalArtArray.push(new Art(artArray[i], nameArray[i], artistArray[i],
                       orientationArray[i], sizeArray[i], priceArray[i]));
  }
}

objectAllArt();
console.log(finalArtArray);

////////////////////////////////////////////////////local storage


let shops = initShops();

function initShops() {
  for (var i = 1; i < localStorage.length; i++){
    let finalShopString = localStorage.getItem(`shopsData${1}`)

  if (!finalShopString) {
    console.log("nothing in storage to load");
    return [];
    loadList();
  } else {
    
    console.log("THIS MEANS THAT THE SHOPPING ARRAY HAS SOMETHING IN IT")
    let shops = JSON.parse(finalShopString);
    return shops;
    loadList();
  }
  }
  
}


////////////////////////////////////////////////////////////////////////////



//generates from class each piece of art for display
function makeTheArt() {
  for (let i = 0; i < finalArtArray.length; i++) {
    artSeen.innerHTML += `<div class="artbox" id="displayPiece${i}">
      <img src="ART/${imgNameArray[i]}.jpg" style="display: block;">
      <p class="titleC">${nameArray[i]} | By ${artistArray[i]}</p> 
      <p>${priceArray[i]} USD | ${sizeArray[i]} in | ${orientationArray[i]}</p>

      <button class="buy" id="buyPiece${i}" onclick="finalArtArray[${i}].buyItem()">
      Buy</button>
      <button class="sell" id="returnPiece${i}" 
      onclick="finalArtArray[${i}].returnItem()" disabled>Return</button>
      </div> <br>`
  }
}

makeTheArt();


////////////////////////////////////////////////////////////////////
//sorting art by certain values



function selector() {
  //get "value" from html selector
  let selection = document.getElementById(`sortby`).value;
  
  //action based on selected
  if (selection === "all") {
    allSort();
  } else if (selection === "landscape") {
    landscapeSort();
  } else if (selection === "portrait") {
    portraitSort();
  } else if (selection === "ross") {
    rossSort();
  } else if (selection === "magritte") {
    magritteSort();
  }
}


function allSort() {
  for (let i = 0; i < finalArtArray.length; i++) {
    document.getElementById(`displayPiece${i}`).style.display = "block";
  }
}

function landscapeSort() {
  for (let i = 0; i < finalArtArray.length; i++) {
    if (orientationArray[i] == "Landscape") {
      document.getElementById(`displayPiece${i}`).style.display = "block";
    } else {
      document.getElementById(`displayPiece${i}`).style.display = "none";
    }
  }
}

function portraitSort() {
  for (let i = 0; i < finalArtArray.length; i++) {
    if (orientationArray[i] == "Portrait") {
      document.getElementById(`displayPiece${i}`).style.display = "block";
    } else {
      document.getElementById(`displayPiece${i}`).style.display = "none";
    }
  }
}

function rossSort() {
  for (let i = 0; i < finalArtArray.length; i++) {
    if (artistArray[i] == "Bob Ross") {
      document.getElementById(`displayPiece${i}`).style.display = "block";
    } else {
      document.getElementById(`displayPiece${i}`).style.display = "none";
    }
  }
}

function magritteSort() {
  for (let i = 0; i < finalArtArray.length; i++) {
    if (artistArray[i] == "René Magritte") {
      document.getElementById(`displayPiece${i}`).style.display = "block";
    } else {
      document.getElementById(`displayPiece${i}`).style.display = "none";
    }
  }
}
