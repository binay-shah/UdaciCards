import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import Quiz from './Quiz'
import DeckItem from './DeckItem'
import { white, purple } from '../utils/colors'
import { connect } from 'react-redux'

function AddBtn ({ onPress }) {
  return (
    <TouchableOpacity style={[
        	Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn, {backgroundColor: 'white'}, {outline: 'true'}]}
      		onPress={onPress}>
        <Text style={styles.btnText}>Add Card</Text>
    </TouchableOpacity>
  )
}

function StartBtn ({ onPress, disabled }) {
  return (
    <TouchableOpacity style={[
        	Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn, {backgroundColor: 'black'}]}
      		onPress={onPress}
      		disabled={disabled}>
        <Text style={[styles.btnText, {color: 'white'}]}>Start Quiz</Text>
    </TouchableOpacity>
  )
}


class Deck extends  React.Component{

	startQuiz = () => {
		this.props.navigation.navigate('Quiz', {key: this.props.route.params.key})
	}

	addCard = () => {
		this.props.navigation.navigate('NewQuestion', {key: this.props.route.params.key})

		
	}

	render(){
		const { key } = this.props.route.params			
		const { entries} = this.props	
		return(
			<View style={styles.container}>
				<DeckItem title = {entries[key].title} numCards={entries[key].questions.length}/>
				<View>
					<AddBtn onPress={this.addCard} />
					<StartBtn disabled={entries[key].questions.length === 0} onPress={this.startQuiz} />
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

function mapStateToProps (entries) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(Deck)