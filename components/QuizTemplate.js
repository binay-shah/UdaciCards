import  React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'
import TextButton from "./TextButton"
import { connect } from 'react-redux'
import { white } from '../utils/colors'



function CorrectBtn ({ onPress }) {
  return (
    <TouchableOpacity style={[
          Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn, {backgroundColor: 'green'}, {outline: 'true'}]}
      onPress={onPress}>
        <Text style={styles.btnText}>Correct</Text>
    </TouchableOpacity>
  )
}


function IncorrectBtn ({ onPress }) {
  return (
    <TouchableOpacity style={[
          Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn, {backgroundColor: 'red'}, {outline: 'true'}]}
      onPress={onPress}>
        <Text style={styles.btnText}>Incorrect</Text>
    </TouchableOpacity>
  )
}



class QuizTemplate extends React.Component{

  state = {
    flipCard: false
  }
	 handleCorrect = () => {
	 	this.props.onAnswer(true)
  	}

  	handleIncorrect = () => {
      this.props.onAnswer(false)
  	}

    handleFlip = () => {
      this.setState((prevState) => ({
          flipCard: prevState.flipCard ? false: true
      }))
    }



	render(){
		const { currentCard, totalCards, card} = this.props
    const { flipCard } = this.state
		return(
			<View style={styles.container}>
				
	        	<Text style={[{flexDirection: 'row'}, {alignSelf: 'flex-start'}]}>{ `${currentCard+1}/${totalCards}` }</Text>
	      		
		        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
		  				<Text style={styles.questionText}>{flipCard ? card.answer : card.question}</Text>
		  				<TextButton onPress={this.handleFlip} style={{padding: 10}}>{flipCard ? 'Question' : 'Answer'}</TextButton>
		        </ScrollView> 
				    <View>
	  				    <CorrectBtn onPress={this.handleCorrect}/>
	          		<IncorrectBtn onPress={this.handleIncorrect}/>
	          </View>
	    </View>  
		)
	}
}


const styles = StyleSheet.create({

  container: {
      flex: 1,
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: white,     

    },
    row: {
      flexDirection: 'row',     
      flex: 1,      
      alignItems: "center"
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
    
  },
  btnText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  questionText: {
    color: 'black',
    fontSize: 42,
    textAlign: 'center'
  },
  
})


export default QuizTemplate

