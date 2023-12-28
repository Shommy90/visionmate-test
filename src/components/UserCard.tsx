import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC, memo} from 'react';
import color from '../styles/colors';

interface UserCardProps {
  picture: string;
  name: {
    first: string;
    last: string;
  };
  city: string;
  email: string;
  index: number;
  switchEnabled: boolean;
}

const UserCard: FC<UserCardProps> = ({
  picture,
  name,
  city,
  email,
  index,
  switchEnabled,
}) => {
  const bgColor =
    index % 2 === 0 && switchEnabled ? color.secondary : color.primary;

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <Image source={{uri: picture}} style={styles.picture} />

      <View style={styles.info}>
        <Text style={styles.name}>
          {name.first} {name.last}
        </Text>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const memoizedUserCard = memo(UserCard);

export default memoizedUserCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    flexDirection: 'row',

    shadowColor: color.shadow,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  info: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '700',
    color: color.text,
  },
  city: {
    fontSize: 12,
    color: `${color.text}90`,
  },
  email: {
    fontSize: 12,
    color: `${color.text}90`,
  },
});
