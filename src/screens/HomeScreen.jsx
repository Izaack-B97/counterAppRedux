import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux';

import { ButtonComponent } from '../components/ButtonComponent';

import { types } from '../types';

export const HomeScreen = () => {

  const counter = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <View style={ styles.container }>
        <View style={ styles.containerTextCounter }>
          <Text style={ styles.textCounter }>Counter: { counter }</Text>
        </View>
        <View style={ styles.buttonsContainer }>
          <ButtonComponent text='Increment' handleOnPress={() => dispatch({ type: types.increment })} />
          <ButtonComponent text='Decrement' handleOnPress={() => dispatch({ type: types.decrement })} />
          <ButtonComponent text='Reset' handleOnPress={() => dispatch({ type: types.reset })} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerTextCounter: {
    backgroundColor: '#c5c6c8',
    padding: 15,
    width: '80%',
    height: 150,
    borderRadius: 5,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    
  },

  textCounter: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold'
  },

  buttonsContainer: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});