import  React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import TextButton from "./TextButton"
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

class Quiz extends React.Component{
	render(){
		return(
			<View style={styles.container}>
        <View style={{alignItems: 'center'}}>
  				<Text style={styles.questionText}>Does React Native work with Android</Text>
  				<TextButton style={{padding: 10}}>Question</TextButton>
        </View>  
        <View>
  				<CorrectBtn />
          <IncorrectBtn />
          </View>
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

export default Quiz