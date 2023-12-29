import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import color from '../styles/colors';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {useHeaderHeight} from '@react-navigation/elements';

const UserInfoError: FC = () => {
  const headerHeight = useHeaderHeight();

  return (
    <View style={styles.container}>
      <View style={{marginTop: -headerHeight}}>
        <EntypoIcon name="user" size={60} color={color.light} />
      </View>

      <Text style={styles.text}>User does not exist</Text>
    </View>
  );
};

export default UserInfoError;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    color: color.light,
  },
});
