import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import DeckItem from './DeckItem'
import { white, purple } from '../utils/colors'

function AddBtn ({ onPress }) {
  return (
    <TouchableOpacity style={[
        	Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn, {backgroundColor: 'white'}, {outline: 'true'}]}
      		onPress={onPress}>
        <Text style={styles.btnText}>Add Card</Text>
    </TouchableOpacity>
  )
}

function StartBtn ({ onPress }) {
  return (
    <TouchableOpacity style={[
        	Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn, {backgroundColor: 'black'}]}
      		onPress={onPress}>
        <Text style={[styles.btnText, {color: 'white'}]}>Start Quiz</Text>
    </TouchableOpacity>
  )
}


class Deck extends  React.Component{

	startQuiz = () => {

	}

	addCard = () => {

		
	}

	render(){
		return(
			<View style={styles.container}>
				<DeckItem />
				<View>
					<AddBtn onPress={this.addCard} />
					<StartBtn onPress={this.startQuiz} />
	        	</View>				
			</View>

		)
	}
}

const styles = StyleSheet.create({

	container: {
	    flex: 1,
	    justifyContent: 'space-around',
	    padding: 20,
	    backgroundColor: white
  	},
  	
	iosBtn: {
	    backgroundColor: white,
	    padding: 10,
	    borderRadius: 7,
	    height: 45,
	    marginLeft: 40,    
	    marginRight: 40
  	},
	androidBtn: {
		backgroundColor: 'black',
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		height: 80,
		borderRadius: 10,
		marginBottom: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1
	},
	btnText: {
		color: 'black',
		fontSize: 30,
		textAlign: 'center'
	}
	
})

export default Deck