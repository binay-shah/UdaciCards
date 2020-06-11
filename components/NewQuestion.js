import  React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { white } from '../utils/colors'


function SubmitBtn ({onPress }) {
	return (
		<TouchableOpacity style={
        	Platform.OS === "ios" ? stylesl.iosBtn : styles.androidBtn}
      		onPress={onPress}>
      		<Text style={styles.submitBtnText}>SUBMIT</Text>
    	</TouchableOpacity>
	)
}

class NewDeck extends React.Component{

	state = {
		answerText: '',
		questionText: ''
	}

	onChangeQuestion = (text) => {
		this.setState(() => ({
			questionText: text
			
		}))
	}

	onChangeAnswer = (text) => {
		this.setState(() => ({
			answerText: text
		}))
	}

	render(){
		const { answerText, questionText}  = this.state
		return(
			<KeyboardAvoidingView style={styles.container}>
				
				<TextInput 
			      style={styles.textInput}
			      onChangeText={text => this.onChangeQuestion(text)}
			      value={questionText}
			    />
			    <TextInput 
			      style={styles.textInput}
			      onChangeText={text => this.onChangeAnswer(text)}
			      value={answerText}
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

