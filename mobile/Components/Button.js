import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    width: '100%',
    padding: 20,
    marginVertical: 20,
    borderWidth: 0,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  }
})

const themes = {
  'on': {
    backgroundColor: 'green',
  },  
  'off': {
    backgroundColor: 'red',
  },  
  'blink': {
    backgroundColor: 'blue',
  },  
}

const Button = ({ theme, text, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, themes[theme]]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
} 

export default Button;
