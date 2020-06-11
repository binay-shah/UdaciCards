import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native'
import Deck from './components/Deck'
import DeckList from './components/DeckList'
import DeckItem from './components/DeckItem'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'





export default function App() {
  return (
    <View style={{flex: 1}}>
      <NewDeck />
    </View>
  );
}


