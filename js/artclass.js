//

//shopping cart array
let shoppingCartArray = [];


class Art {

  constructor(art, title, artist, orientation, size, price) {
    this.art = art;
    this.title = title;
    this.artist = artist;
    this.orientation = orientation;
    this.size = size;
    this.price = price;
    this.bought = false;
  }

 //add to cart array
  buyItem() {
    this.bought = true;
    console.log(`${this.title} added to cart`);
    shoppingCartArray.push(this.title);
    localStorage.setItem(`shopsData${localStorage.length + 1}`, this.title);
    
    for (let i = 0; i < finalArtArray.length; i++) {
      if (nameArray[i] == this.title) {
        //switch button function
        document.getElementById(`returnPiece${i}`).disabled = false;
        document.getElementById(`buyPiece${i}`).disabled = true;
        
        
      }
    }
    
    console.log(shoppingCartArray);
  }
  
 //remove from cart array
  returnItem() {
    
    this.bought = false;
    for (let i = 0; i < finalArtArray.length; i++) {
      if (nameArray[i] == this.title) {
        //switch button function
        document.getElementById(`returnPiece${i}`).disabled = true;
        document.getElementById(`buyPiece${i}`).disabled = false;
        shoppingCartArray.pop(i);
      }
    }
    for (let i = 0; i < finalArtArray.length; i++) {
      if (nameArray[i] == this.title) {
        
      }
    }
    
    console.log(shoppingCartArray);
  }

}


