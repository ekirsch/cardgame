var cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var cardSuit = ["diamonds", "spades", "clubs", "hearts"]





var Card = function(){
    this.init = function(){
        this.suit = document.createElement('img')
        this.number = document.createElement('div')
        this.init = function(){
            
        }
        
    var cardContDiv = document.createElement('div'),
flipDiv  =  document.createElement('div'),
frontDiv = document.createElement('div'),
backDiv  = document.createElement('div'),
catDiv = document.createElement('div');

        this.suit.src = "images/hearts.svg"

cardContDiv.className = 'card_container'
flipDiv.className = 'flip';
frontDiv.className = 'card_front';
backDiv.className = 'card_back';
catDiv.className = 'card_category'



catDiv.appendChild(this.number);
catDiv.appendChild(this.suit)
frontDiv.appendChild(catDiv);
flipDiv.appendChild(frontDiv)
flipDiv.appendChild(backDiv)
cardContDiv.appendChild(flipDiv)
var cardDeck = document.getElementById("cardDeck")
cardDeck.appendChild(cardContDiv)
cardContDiv.onclick = function(e){
    console.log(e.currentTarget)
    setTimeout(function){ e.currentTarget.classList.toggle("flip_card")})

     e.currentTarget.classList.toggle("flip_card")
            
}

for (var i = cardNumbers.length - 1; i >= 0; i--){
    
    for (var j = cardSuit.length - 1; j >= 0; j--){
         var CardDeck = new Card();
            CardDeck.init();
        CardDeck.number.innerHTML = cardNumbers[i]
        CardDeck.suit.src = "images/" + cardSuit[j] + ".svg";
        
    }
}




//var CardDeck = new Card();
//CardDeck.init();
//
//var CardDeck2 = new Card();
//CardDeck2.init();
//CardDeck2.suit.src = "images/spades.svg"
//
//var CardDeck3 = new Card();
//CardDeck3.init();
//CardDeck3.suit.src = "images/diamonds.svg"



            console.log(e.currentTarget)
    setTimeout(function){ e.currentTarget.classList.toggle("flip_card")
        
        
    }
    
    
    
            e.currentTarget.classList.toggle("flip_card")
            
            
        }

    }
}

for (var i = cardNumbers.length - 1; i >= 0; i--){
    
    for (var j = cardSuit.length - 1; j >= 0; j--){
         var CardDeck = new Card();
            CardDeck.init();
        CardDeck.number.innerHTML = cardNumbers[i]
        CardDeck.suit.src = "images/" + cardSuit[j] + ".svg";
        
    }
}




//var CardDeck = new Card();
//CardDeck.init();
//
//var CardDeck2 = new Card();
//CardDeck2.init();
//CardDeck2.suit.src = "images/spades.svg"
//
//var CardDeck3 = new Card();
//CardDeck3.init();
//CardDeck3.suit.src = "images/diamonds.svg"


