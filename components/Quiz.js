import  React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import TextButton from "./TextButton"
import { connect } from 'react-redux'
import { white } from '../utils/colors'
import QuizTemplate from './QuizTemplate'
import QuizResult from './QuizResult'




class Quiz extends React.Component{

  state = {
    currentCard: 0, 
    correctCount: 0
  }

  handleAnswer = (isCorrect) => {
    this.setState((currentState) => ({
      correctCount: isCorrect ? currentState.correctCount + 1 : currentState.correctCount,
      currentCard: currentState.currentCard + 1
    }))
  }

  handleRestartQuiz = () => {
    this.setState(() => ({
      currentCard: 0, 
      correctCount: 0
    }))
  }

	render(){

    const { key} = this.props.route.params
    const { entries } = this.props
    const cards = entries[key].questions    
    const{ currentCard, correctCount } = this.state
    const totalCards = cards.length
    

		return(
			<View style={styles.container}>           
        {
          currentCard < cards.length ? 
            <QuizTemplate card={cards[currentCard]} onAnswer={this.handleAnswer} currentCard={currentCard} totalCards={totalCards} /> 
            : <QuizResult restartQuiz={this.handleRestartQuiz} backToDeck={() => this.props.navigation.goBack()} score={correctCount*100/totalCards} />
        }
			</View>
		)
	}
}

const styles = StyleSheet.create({

  container: {
      flex: 1,
      justifyContent: 'space-around',
      padding: 20,
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

function mapStateToProps (entries, ) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(Quiz)