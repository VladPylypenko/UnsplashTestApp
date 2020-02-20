import React from 'react';
import {View, Image} from 'react-native';
import {Header} from '../header';
import {w, h} from '../../../constants';

export const FullScreenPhoto = props => {
  const {urls, user} = props.navigation.state.params;
  return (
    <View>
      <Header
        title={user.first_name}
        onPress={() => props.navigation.goBack()}
      />
      <View>
        <Image
          style={{width: w, height: h - 50}}
          source={{uri: urls.regular}}
        />
      </View>
    </View>
  );
};
