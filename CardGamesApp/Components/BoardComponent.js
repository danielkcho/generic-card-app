import React, { Component } from 'react';
import { Text, AppRegistry, Alert, Button, Dimensions, FlatList, Platform,
  Props, View, StyleSheet, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import {PlayingCard, Card, Deck} from './CardObjects';
import boardStore from '../Store/BoardStore';
import FlipCard from './FlipCard';
import dispatcher from '../Dispatcher/Dispatcher';
import * as Actions from '../Actions/Actions';
import {cardifier, buildDeck} from '../functions/functions';
import styles from '../assets/StyleSheets'
import MovableCard from '../Components/MovableCard';

export class BoardComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {faceUp: [], faceDown: []}
    this.state.faceUp = boardStore.getAll();
  }

  /********************************************************
  * Once Boardstore emits change, either rChange or Change,
  * the cards on the board will be updated
  ********************************************************/
  componentWillMount(){
    boardStore.on("Change", () => {
      this.setState({
        faceUp: boardStore.getAll()
      })
    })

    boardStore.on("rChange", () => {
      this.setState({
        faceUp: boardStore.getAll()
      })
    })

  }

  /*******************************************************************************
  * I will not comment on the code below until we change the method used, because
  * this will not co-operate with drawing cards from hand to board and vice versa.
  *******************************************************************************/
  render() {

    var isVisible = (this.state.faceUp.length > 0)? true : false;

    if(isVisible){
      array = this.state.faceUp.map(function(num) {
      return <MovableCard card = {num}></MovableCard>
    });
    }else{
      array = <View />
    }

    return(
      array
    )
  }
}