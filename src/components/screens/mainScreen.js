import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Header} from '../header';
import {PhotoCard} from '../photoCard';
import {FULL_PHOTO_SCREEN} from '../../navigation/routes';
import {FlatList} from 'react-native';
import {getPhotos} from '../../redux/store';
import {connect} from 'react-redux';

const MainScreen = props => {
  useEffect(() => props.getPhotos(), []);
  const {title, photos, navigation} = props;
  return (
    <View>
      <Header title={title} />
      <FlatList
        data={photos}
        renderItem={({item}) => (
          <PhotoCard
            data={item}
            onPress={() => navigation.navigate(FULL_PHOTO_SCREEN, item)}
          />
        )}
        keyExtractor={item => item.id}
        onEndReached={() => props.getPhotos()}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  photos: state.photos,
  title: state.title,
  loading: state.loading,
});

const mapDispatchToProps = {
  getPhotos,
};

export const connectMain = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
