import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const ButtonComponent = ({ text = '', handleOnPress = () => {} }) => {
  return (
    <TouchableOpacity activeOpacity={ 0.8 } style={ styles.button } onPress={ handleOnPress }>
        <Text style={ styles.buttonText } >{ text }</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
  button: {
    width: '95%',
    backgroundColor: '#b2e2f2',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    // Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 14 ,
  }
});

