import  React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { white } from '../utils/colors'
import { connect } from 'react-redux'
import { addCard} from '../actions'
import { addCardToDeck } from '../utils/api' 


function SubmitBtn ({onPress, disabled }) {
	return (
		<TouchableOpacity style={
        	Platform.OS === "ios" ? stylesl.iosBtn : styles.androidBtn}
      		onPress={onPress}
      		disabled={disabled}>
      		<Text style={styles.submitBtnText}>SUBMIT</Text>
    	</TouchableOpacity>
	)
}

class NewQuestion extends React.Component{

	state = {
		answerText: '',
		questionText: ''
	}

	handleQuestionChange = (text) => {
		if(text === '')
			return
		this.setState(() => ({
			questionText: text
			
		}))
	}

	handleAnswerChange = (text) => {
		if(text === '')
			return
		this.setState(() => ({
			answerText: text
		}))
	}

	handleSubmit = () => {		
		const { questionText, answerText} = this.state
		this.props.dispatch(addCard(this.props.route.params.key, {question: questionText, answer: answerText }))
		addCardToDeck(this.props.route.params.key, {question: questionText, answer: answerText })
		this.setState(() => ({
			answerText: '',
			questionText: ''
		}))	
		this.props.navigation.goBack()

	}

	render(){
		const { answerText, questionText}  = this.state
		
		return(
			<KeyboardAvoidingView style={styles.container}>
				
				<TextInput
				  placeholder='Question'	 
			      style={[styles.textInput, {paddingLeft: 10}]}
			      onChangeText={ this.handleQuestionChange}
			      value={questionText}
			    />
			    <TextInput
			      placeholder='Answer'	 
			      style={[styles.textInput, {paddingLeft: 10}]}
			      onChangeText={ this.handleAnswerChange}
			      value={answerText}
			    />
				<SubmitBtn disabled={answerText === '' && questionText === ''} onPress={this.handleSubmit}/>
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



export default connect((entries) => ({entries}))(NewQuestion)

