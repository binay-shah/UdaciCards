import 'react-native-gesture-handler';
import  React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native'
import Deck from './components/Deck'
import DeckList from './components/DeckList'
import { NavigationContainer } from '@react-navigation/native';
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainNav from './router/router'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default class App extends React.Component {

  render(){

  return (
  	<Provider store={createStore(reducer)}>
  		<NavigationContainer>
		    <View style={{flex: 1}}>
          <MainNav />
		    </View>
	    </NavigationContainer>
    </Provider>
  );
  
	}
}


