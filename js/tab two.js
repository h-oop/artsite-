//
//loads the shopping cart array every time the page is opened
function loadlist() {
  shoppinglist.innerHTML = ``
  for (let i=0; i < localStorage.length; i++) {
    shoppinglist.innerHTML += `<div>1x ${shoppingCartArray[i]}<div>`;
  }
}
//"checkout" aka just clears the shopping cart array leaving gallery items bought/not
function checkout() {
  for (let i=0; i < shoppingCartArray.length + 1; i++) {
    shoppingCartArray.pop();
  }
  
  loadlist();
  console.log(shoppingCartArray);
}

//