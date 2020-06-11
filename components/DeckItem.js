import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckItem extends React.Component{

	render(){
		return(
			<View>
				<Text style={styles.titleText}>UdaciCards</Text>
				<Text style={styles.numCardsText}>3 Cards</Text>
			</View>	
		)
	}
}

const styles = StyleSheet.create({

	titleText: {
		color: 'black',
    	fontSize: 32,
    	textAlign: 'center'
	},
	numCardsText: {
		color: 'gray',
    	fontSize: 24,
    	textAlign: 'center'
	}
})

export default DeckItem


