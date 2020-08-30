import React from 'react'
import { View, StyleSheet } from 'react-native'

import Colors from '../constant/colors'
import TitleText from './TitleText'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 20,
  }
})

export default Header