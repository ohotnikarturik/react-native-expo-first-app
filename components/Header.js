import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Colors from '../constant/colors'
import colors from '../constant/colors'

export const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: colors.white,
    fontSize: 20
  }
})