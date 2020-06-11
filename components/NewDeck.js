import  React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { white } from '../utils/colors'


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

	render(){
		const { inputText} = this.state
		return(
			<KeyboardAvoidingView style={styles.container}>
				<Text style={[styles.newDeckTitleText, {marginBottom: 30}]}>What is the title of your new deck?</Text>
				<TextInput 
				  placeholder = "Deck title"
			      style={styles.textInput}
			      onChangeText={this.onChangeText}
			      value={inputText}
			    />
				<SubmitBtn />
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
		alignItems: 'center',
		
		
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



export default NewDeck

