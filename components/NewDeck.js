import  React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native'
import { white } from '../utils/colors'
import { saveDeckTitle } from '../utils/api'
import { connect }  from 'react-redux' 
import { addDeck } from '../actions'


function SubmitBtn ({onPress }) {
	return (
		<TouchableOpacity style={
        	Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn}
      		onPress={onPress}>
      		<Text style={styles.submitBtnText}>SUBMIT</Text>
    	</TouchableOpacity>
	)
}

class NewDeck extends React.Component{

	state = {
		inputText: ''
	}

	onChangeText = (text) => {
		
		this.setState(() => ({
			inputText: text
		}))	
	}

	handleSubmit = () => {
		const { dispatch } = this.props		
		dispatch(addDeck(this.state.inputText))
		saveDeckTitle(this.state.inputText)
		this.setState(() => ({
			inputText: ''
		}))	
		this.props.navigation.navigate('Deck', {key:  this.state.inputText})	

	}

	render(){
		const { inputText } = this.state
		return(
			<KeyboardAvoidingView style={styles.container}>
				<Text style={[styles.newDeckTitleText, {marginBottom: 30}]}>What is the title of your new deck?</Text>
				<TextInput				  	 
				  placeholder = "Deck title"
			      style={[styles.textInput,  {paddingLeft: 10}]}
			      onChangeText={this.onChangeText}
			      value={inputText}
			    />
				<SubmitBtn onPress={this.handleSubmit}/>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({

	container: {
	    flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',	    
	    backgroundColor: white,
	    padding: 20
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
		justifyContent: 'center',
		alignItems: 'center'	
		
	},
	newDeckTitleText: {
		color: 'black',
		fontSize: 30,
		textAlign: 'center'
	},

	submitBtnText: {
		color: white,		
		fontSize: 20,
		textAlign: 'center',
	},
	textInput: {
		height: 50, 
		borderColor: 'gray', 
		borderWidth: 1 , 
		marginBottom: 30, 
		alignSelf: 'stretch',
		borderRadius: 8
	}
	
})

function mapStateToProps (entries) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(NewDeck)

