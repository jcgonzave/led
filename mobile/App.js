import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from './Components';
import { on, off, blink } from './api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Button text="On" theme="on" onPress={on} />
      <Button text="Off" theme="off" onPress={off} />
      <Button text="Blink" theme="blink" onPress={blink} />
    </View>
  );
}


