import React from 'react'
import { Text, TextInput, View, Button, StyleSheet } from 'react-native'

const Card = ({children, style}) => {
  return (
  <View style={{...styles.card, ...style}}>{children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
})

export default Card