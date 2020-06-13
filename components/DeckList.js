import React from 'react'
import { Text, View, FlatList, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { receiveEntries, addEntry } from '../actions'
import { getDecks } from '../utils/api'
import DeckItem from './DeckItem'
import { white } from '../utils/colors'

class DeckList extends React.Component{

	 componentDidMount(){
		const { dispatch } = this.props

		 getDecks()
		 	.then((entries) => {		 			
		 		dispatch(receiveEntries(JSON.parse(entries)))})
		}

		FlatListItemSeparator = () => {
		  return (
		    <View
		      style={{
		        height: 1,
		        width: "100%",
		        backgroundColor: "#000",
		      }}
		    />
		  );
		}

		

	render(){
		const { entries } = this.props
		data = Object.values(entries)
		
		
		
		return(
			<View style={styles.container}>
				<FlatList

			        data={data}
			        ItemSeparatorComponent = { this.FlatListItemSeparator }
			        renderItem={({ item }) => (
			        	<TouchableHighlight
			        		onPress={() => this.props.navigation.navigate('Deck', {key:  item.title})}
			        		key={item}>
			        		<DeckItem  key={item} title={item.title} numCards={item.questions.length}/>
			        	</TouchableHighlight>	
			        )}
			        keyExtractor={item => item.id}
			     />
			</View>

		)
	}
}

const styles = StyleSheet.create({
	container: {
	    flex: 1,
	    
	    justifyContent: 'center',	    
	    backgroundColor: white,	   
  	},	
})

function mapStateToProps (entries) {
  return {
    entries
  }
}
export default connect(mapStateToProps)(DeckList)