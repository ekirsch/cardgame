var cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
var cardSuit = ["diamonds", "spades", "clubs", "hearts"]
var Card = function(){
   
    this.suit = document.createElement('img')
    this.cardContDiv = document.createElement('div');
    this.number = document.createElement('div')
    this.init = function(){

    
        var flipDiv  =  document.createElement('div'),
        frontDiv = document.createElement('div'),
        backDiv  = document.createElement('div'),
        catDiv = document.createElement('div');

        this.suit.src = "images/hearts.svg"

        this.cardContDiv.className = 'card_container'
        flipDiv.className = 'flip';
        frontDiv.className = 'card_front';
        backDiv.className = 'card_back';
        catDiv.className = 'card_category'



        catDiv.appendChild(this.number);
        catDiv.appendChild(this.suit)
        frontDiv.appendChild(catDiv);
        flipDiv.appendChild(frontDiv)
        flipDiv.appendChild(backDiv)
        this.cardContDiv.appendChild(flipDiv)
        
        this.cardContDiv.id = this.id 
        this.cardContDiv.draggable = true;
        this.cardContDiv.ondragstart = function(e){
            e.dataTransfer.setData("text", e.currentTarget.id);
        }
    
        
        this.cardContDiv.onclick = function(e){
            console.log(e.currentTarget)
        //    setTimeout(function){ e.currentTarget.classList.toggle("flip_card")})

             e.currentTarget.classList.toggle("flip_card")
                
        }
        return this.cardContDiv
    }
   
}

var Deck = function(){
    this.cardDeck = document.getElementById("cardDeck")
    this.init = function(){
    
        for (var i = cardNumbers.length - 1; i >= 0; i--){
        for (var j = cardSuit.length - 1; j >= 0; j--){
            var myCard = new Card();
            var myCardcont =myCard.init();
            myCard.number.innerHTML = cardNumbers[i]
            myCard.suit.src = "images/" + cardSuit[j] + ".svg";
            myCard.cardContDiv.id = cardSuit + cardNumbers[i]
            this.cardDeck.appendChild(myCardcont)
        }
    }
        
    }
}




    var dropArea = document.getElementById('discardPile')
    dropArea.addEventListener("dragover",function(e){
        e.preventDefault()
    })
    dropArea.addEventListener("drop", function(e){
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        console.log(e)
        var cardDraging=document.getElementById(data)
        cardDraging.classList.add("discard")
        e.currentTarget.appendChild(cardDraging)        
     })



var shuffleBtn= document.getElementById('shuffle');
    
    shuffleBtn.addEventListener("click",function(e){shuffle()})





function shuffle() {
    var cardDeck = document.getElementById("cardDeck")
  var array = cardDeck.childNodes;
    var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
    for(var i = array.length - 1; i >= 0; i--){
       cardDeck.appendChild(array[i]) 

    }
  
}
var Game = new Deck();
Game.init()

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

