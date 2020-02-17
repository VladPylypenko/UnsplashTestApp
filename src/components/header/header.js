import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export const Header = ({title, onPress}) => {
  const {header, text_header} = styles;
  return (
    <View style={header}>
      <TouchableOpacity onPress={onPress}>
        <Text style={text_header}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    position: 'relative',
    backgroundColor: '#9A0084',
    alignItems: 'center',
  },
  text_header: {
    fontSize: 30,
    color: '#FFF',
  },
});
