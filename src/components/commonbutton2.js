import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

export default function CommonButton2({title, onPress, style}) {
  return (
    <View>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <Text style={styles.font}> {title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 38,
    backgroundColor: 'red',
    borderRadius: 8,
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    color: 'black',
  },
});
