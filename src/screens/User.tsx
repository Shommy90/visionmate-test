import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import UserInfoItem from '../components/UserInfoItem';
import UserInfoError from '../components/UserInfoError';
import {UserInfo} from '../types/User';
import color from '../styles/colors';
import {UserRouteProp} from '../types/navigation';

const User: FC = () => {
  const route = useRoute<UserRouteProp>();

  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (route.params) {
      setUser(route.params.user);
    }
  }, [route.params]);

  if (!user) {
    return <UserInfoError />;
  }

  const {picture, name, login, location} = user;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: picture.large}} style={styles.image} />

        <Text style={styles.username}>{`@${login.username}`}</Text>
      </View>

      <UserInfoItem icon="pencil" label={'First Name'} text={name.first} />
      <UserInfoItem icon="pencil" label={'Last Name'} text={name.last} />
      <UserInfoItem icon="location" label={'City'} text={location.city} />
      <UserInfoItem
        icon="location-pin"
        label={'Street Address'}
        text={`${location.street.name} ${location.street.number}`}
      />
      <UserInfoItem
        icon="newsletter"
        label={'Postalcode'}
        text={location.postcode}
      />
    </ScrollView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  username: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: '500',
    color: color.secondary,
  },
});
