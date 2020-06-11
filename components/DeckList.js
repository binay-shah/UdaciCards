import React from 'react'
import { Text, View, FlatList } from 'react-native'



function DeckItem({ title, numCards}){
	return(
		<View>
			<Text>title</Text>
			<Text>numCards</Text>
		</View>
	)
}

class DeckList extends React.Component{

	async componentDidMount(){


	}

	render(){
		return(
			<View>
				<Text>title</Text>
			</View>

		)
	}
}

export default DeckList