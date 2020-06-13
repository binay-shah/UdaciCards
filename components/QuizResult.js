import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function QuizResult(props){

	return (
		<View style={styles.container}>
			<View style={styles.circle}>
				<Text style={styles.scoreText}>{props.score}%</Text>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({

	container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      alignItems: 'center',
      backgroundColor: 'white',
    },

	circle: {

	    width: 200,
	    height: 200,
	    borderRadius: 200/2,
	    backgroundColor: 'yellow',
	    alignItems: 'center',
	    justifyContent: 'center'
	},

	scoreText: {
    color: 'black',
    fontSize: 50,
    textAlign: 'center'
  },
})

