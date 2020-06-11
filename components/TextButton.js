import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function TextButton ({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.textBtn}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

	textBtn: {
		textAlign: 'center',
		color: 'red',
		marginTop: 10
	}
})