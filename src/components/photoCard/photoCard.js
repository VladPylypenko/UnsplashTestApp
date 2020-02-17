import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {w, h} from '../../../constants';

export const PhotoCard = ({onPress, data}) => {
  const {author, img, container, sub, author_img, footer} = styles;
  const {urls, user} = data;

  return (
    <View style={container}>
      <TouchableOpacity onPress={onPress}>
        <View style={sub}>
          <Image style={img} source={{uri: urls.regular}} />
        </View>
      </TouchableOpacity>
      <View style={footer}>
        <Image style={author_img} source={{uri: user.profile_image.large}} />
        <Text style={author}>{user.first_name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 15,
  },
  sub: {
    alignItems: 'center',
  },
  author: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 52 / 4,
  },
  author_img: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    marginTop: 5,
    marginLeft: 5,
  },
  img: {
    width: w * 0.9,
    height: h * 0.6,
  },
  footer: {
    height: 52,
    backgroundColor: '#FFC3EB',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: w * 0.05,
    marginRight: w * 0.05,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
