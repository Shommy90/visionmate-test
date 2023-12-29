import {RouteProp, NavigationProp} from '@react-navigation/native';
import {UserInfo} from './User';

export type RootStackParamList = {
  Home: undefined;
  Users: undefined;
  User: {user: UserInfo};
};

export type UserRouteProp = RouteProp<RootStackParamList, 'User'>;

export type HomeScreenProp = NavigationProp<RootStackParamList, 'Home'>;
