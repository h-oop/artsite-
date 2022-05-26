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

//button please work
let sortBtnEl = document.getElementById("sortbtn");


/////////////////////////////////////////////////////////////////////////////
let arts = initArts();

function initArts() {
  let finalArtStr = localStorage.getItem("artsData");
  if (!finalArtStr) {
    return []
  } else {
    let arts = JSON.parse(finalArtStr);
    for (let i = 0; i < arts.length; i++) {
      arts[i] = new Art(artArray[i], nameArray[i], artistArray[i],
                orientationArray[i], sizeArray[i], priceArray[i])
    }
    return arts;
  }
}

/////////////////////////////// THIS IS THE PROBLEM. CLEARS FINAL ART ARRAY FOR SOME REASON???
// let shops = initShops();

// function initShops() {
//   let finalShopStr = localStorage.getItem("shopsData");
  
//   if (!finalShopStr) {
//     return []
//   } else {
//     ///maybe differ let shops here and let shops above
//     let shops = JSON.parse(finalShopStr);
//     for (let i = 0; i < shops.length; i++) {
//       shoppingCartArray[i] = shops[i];
//       ////////////////////////^^^^^put something in here?????? run thru,. like 
//       ////////////////////. it needs to go thru an array. maybe string/parse
//     }
//     return shops;
//   }
// }

////////////////////////////////////////////////////////////////////////////



//set up default page
function objectAllArt() {
  for (let i=0; i < artArray.length; i++) {
    finalArtArray.push(new Art(artArray[i], nameArray[i], artistArray[i],
                       orientationArray[i], sizeArray[i], priceArray[i]));
  }
}

objectAllArt();
console.log(finalArtArray);


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
//sorting stuff



function selector() {
  //get "value" from html selector
  let selection = document.getElementById(`sortby`).value;
  console.log("pleasework");
  
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
 ////////// artSeen.innerHTML == ``;
  for (let i = 0; i < finalArtArray.length; i++) {
    if (orientationArray[i] == "Landscape") {
      document.getElementById(`displayPiece${i}`).style.display = "block";
    } else {
      document.getElementById(`displayPiece${i}`).style.display = "none";
    }
  }
}

function portraitSort() {
 //////// artSeen.innerHTML == ``;
  for (let i = 0; i < finalArtArray.length; i++) {
    if (orientationArray[i] == "Portrait") {
      document.getElementById(`displayPiece${i}`).style.display = "block";
    } else {
      document.getElementById(`displayPiece${i}`).style.display = "none";
    }
  }
}

function rossSort() {
 ///////// artSeen.innerHTML == ``;
  for (let i = 0; i < finalArtArray.length; i++) {
    if (artistArray[i] == "Bob Ross") {
      document.getElementById(`displayPiece${i}`).style.display = "block";
    } else {
      document.getElementById(`displayPiece${i}`).style.display = "none";
    }
  }
}

function magritteSort() {
///////  artSeen.innerHTML == ``;
  for (let i = 0; i < finalArtArray.length; i++) {
    if (artistArray[i] == "René Magritte") {
      document.getElementById(`displayPiece${i}`).style.display = "block";
    } else {
      document.getElementById(`displayPiece${i}`).style.display = "none";
    }
  }
}






//get el by id style=display:block

