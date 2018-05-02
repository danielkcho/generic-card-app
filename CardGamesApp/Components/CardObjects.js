import {Alert} from 'react-native';
//class for handling generic cards
export class Card {
  constructor(face, back){
    this.face = face;
    this.back = back;
  }

//returns a representation of a card's face side
  getFace(){
    return this.face;
  }

//returns a representation of a card's back side
  getBack(){
    return this.back;
  }

//set the face after creation
  setFace(face){
    this.face = face;
  }

//set the back after creation
  setBack(back){
    this.back = back;
  }
}

//class for handling playing cards in particular
export class PlayingCard extends Card{

  constructor(face, back, color, value){
    super(face, back);
    this.color = color;
    this.value = value;
    this.ID = Math.random() + "-" + color + "-" + value;
    this.status = 'deck';
    this.change = false;
  }
  //returns the face of the card.
  getFace(){
    return super.getFace();
  }
  //returns the back-side of the card.
  getBack(){
    return super.getBack();
  }

//returns the color (suite) of the card.
  getColor(){
    return this.color;
  }

//returns the value of the card.
  getValue(){
    return this.value;
  }

  //puts the face of the card.
  setFace(face){
    super.setFace(face);
  }

  //puts the back-side of the card.
  setBack(back){
    super.setBack(back);
  }

  //method for getting a unique identifier.
  getID(){
    return this.ID;
  }

  //mmethod for knowing where the card is at a given time, set the current loc.
  setStatus(status){
    this.status = status;
  }
  //method for knowing where the card is at a given time, get the current loc.
  getStatus() {
    return this.status;
  }

  //method for knowing if the card has changed, meaning face -> back, back -> face.
  isChanged() {
    return this.change;
  }

  //method for explaining that the change of face to back and vice versa has happened.
  changed() {
    this.change = !(this.change);
  }


}

//class for representing a deck of cards
export class Deck {
  constructor(){
    this.cards = new Array();
  }

//shuffle the deck
  shuffle(){
    var i;
    for(i = 0; i<this.cards.length; i++){
      var x = Math.ceil((Math.random()*(this.cards.length-i))) +i;
      var temp = this.cards[i];
      this.cards[i] = this.cards[x-1];
      this.cards[x-1] = temp;
    }
  }

  push(card){
    this.cards.push(card);
  }

//returns 0 if deck is empty
  pop(){
    if(this.cards.length == 0)
    {
      return 0;
    }
    return this.cards.pop();
  }

  /*
*  filter out all cards with value of num.
*/
  filterNum(num){
    var i;
    for (i = 0; i<this.cards.length; i++){
      if(this.cards[i].getValue() == num){
        var garbage = this.cards.splice(i, 1);
  i--;
      }
    }
  }

/*
*  filter out all cards with value greater than
*  OR equal to num.
*/

/*
*  this currently doesn't work because it
*  resizes the array midway through.
*/
  filterGreaterOrEquals(num){
    var i;
    for (i = 0; i<this.cards.length; i++){
      if(this.cards[i].getValue() >= num){
        var garbage = this.cards.splice(i, 1);
  i--;
      }
    }
  }

/*
*  filter out all cards with value less than
*  OR equal to num.
*/

/*
*  this currently doesn't work because it
*  resizes the array midway through.
*/

  filterLessOrEquals(num){
    var i;
    for (i = 0; i<this.cards.length; i++){
      if(this.cards[i].getValue() <= num){
        var garbage = this.cards.splice(i, 1);
  i--;
      }
    }
  }
}
