import {createStackNavigator} from 'react-navigation';
import {FULL_PHOTO_SCREEN, MAIN_SCREEN} from './routes';
import {connectMain, FullScreenPhoto} from '../components/screens';

export const AppStackNavigator = createStackNavigator(
  {
    [MAIN_SCREEN]: connectMain,
    [FULL_PHOTO_SCREEN]: FullScreenPhoto,
  },
  {
    initialRouteName: MAIN_SCREEN,
    headerMode: 'none',
  },
);
