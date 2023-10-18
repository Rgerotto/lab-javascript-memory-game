class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.shuffleCards();
    this.pickedCards = [];
    this.pairsGuessed = 0;
    this.pairsClicked = 0;
  }
  
  shuffleCards() {
    // ... write your code here
    if(!this.cards){
      return undefined
    }
    let len = this.cards.length;
    while (len > 0) {
      len--;
      let temp = this.cards[len];
      let rdmInd = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[rdmInd];
      this.cards[rdmInd] = temp;
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if(card1 === card2){
      this.pairsClicked++;
      this.pairsGuessed++;
      return true
    }
    else{
      this.pairsClicked++;
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pickedCards < 12){
      return false
    }
    else if(this.pickedCards === this.pairsGuessed){
      return true
    }
    else{
      return true
    }
  }
}
