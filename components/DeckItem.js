import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class DeckItem extends React.Component{

	render(){
		return(
			<View>
				<Text style={styles.titleText}>{this.props.title}</Text>
				<Text style={styles.numCardsText}>{this.props.numCards} Cards</Text>
				
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


