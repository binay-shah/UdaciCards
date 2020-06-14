import 'react-native-gesture-handler';
import  React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native'
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
import { setLocalNotification } from './utils/notification'
import { white, gray } from './utils/colors'
import Constants from 'expo-constants'


function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}




export default class App extends React.Component {

  componentDidMount(){

    setLocalNotification()
  }

  render(){

  return (
  	<Provider store={createStore(reducer)}>
    <View style={{flex: 1}}>
      <UdaciStatusBar backgroundColor={'black'} barStyle="light-content" />
  		<NavigationContainer>		    
          <MainNav />		    
	    </NavigationContainer>
    </View>
    </Provider>
  );
  
	}
}


