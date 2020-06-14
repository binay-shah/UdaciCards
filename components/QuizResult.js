import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { setLocalNotification, clearNotification} from '../utils/notification'



function BackBtn ({ onPress }) {
  return (
    <TouchableOpacity style={[
        	Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn, {backgroundColor: 'black'}]}
      		onPress={onPress}>
        <Text style={[styles.btnText, {color: 'white'}]}>Go Back</Text>
    </TouchableOpacity>
  )
}

function RestartBtn ({ onPress }) {
  return (
    <TouchableOpacity style={[
        	Platform.OS === "ios" ? styles.iosBtn : styles.androidBtn, {backgroundColor: 'black'}]}
      		onPress={onPress}
      		>
        <Text style={[styles.btnText, {color: 'white'}]}>Restart Quiz</Text>
    </TouchableOpacity>
  )
}


class QuizResult extends React.Component{

	componentDidMount(){

		clearNotification()
			.then(setLocalNotification)
	}

	handleRestart = () => {
		this.props.restartQuiz()
	}

	handleGoBack = () => {
		this.props.backToDeck()
	}
	

	render(){
		const { score }  = this.props

		return (
			<View style={styles.container}>
				<View style={[styles.circle, {alignSelf: 'center'}]}>
					<Text style={styles.scoreText}>{score}%</Text>
				</View>
				<View style={styles.row}>
					<BackBtn style={{alignSelf: 'flex-start'}} onPress={this.handleGoBack}/>
					<RestartBtn style={{alignSelf: 'flex-end'}}  onPress={this.handleRestart} />
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({

	container: {
      flex: 1,      
      padding: 20,          
      backgroundColor: 'white',
      justifyContent: 'space-around',
      
    },

    row: {
    	flexDirection: 'row',		    	    
	    justifyContent: 'space-between'
	    

    },

    iosBtn: {
	    backgroundColor: 'white',
	    padding: 10,
	    borderRadius: 7,
	    height: 45,
	    marginLeft: 40,    
	    marginRight: 40
  	},
	androidBtn: {
		backgroundColor: 'black',
		padding: 5,
		paddingLeft: 30,
		paddingRight: 30,
		height: 20,
		borderRadius: 2,
		
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1
	},

	circle: {

	    width: 200,
	    height: 200,
	    borderRadius: 200/2,
	    backgroundColor: 'yellow',
	    justifyContent: 'center',
	    alignItems: 'center'
	    
	},

	scoreText: {
    color: 'black',
    fontSize: 50,
    textAlign: 'center'
  },
})

export default QuizResult

