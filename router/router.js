import React from 'react'
import DeckList from '../components/DeckList'
import Deck from '../components/Deck'
import NewQuestion from '../components/NewQuestion'
import NewDeck from '../components/NewDeck'
import Quiz from '../components/Quiz'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


const Tab = createMaterialTopTabNavigator()


const TabNav = () => (
		 <Tab.Navigator tabBarOptions={{ activeTintColor: 'black', inactiveTintColor: 'gray',
           indicatorStyle :{  backgroundColor:'yellow'} }}>
           
            <Tab.Screen name="Decks" options={{title: 'Decks'}} component={DeckList} />
            <Tab.Screen name="NewDeck" options={{title: 'New Deck'}} component={NewDeck} />		      
          </Tab.Navigator>
)



const Stack = createStackNavigator();

 const MainNav = () => (
	<Stack.Navigator>
      <Stack.Screen name="Home"  options= {{ headerShown: false} }component={TabNav} />
      <Stack.Screen name="Deck" component={Deck} options={({ route }) => ({ title: route.params.key })} />
      <Stack.Screen name="NewQuestion" options={{title: 'Add Card'}} component={NewQuestion} /> 
      <Stack.Screen name="Quiz" options={{title: 'Quiz'}} component={Quiz} />      
    </Stack.Navigator>
)

export default MainNav







