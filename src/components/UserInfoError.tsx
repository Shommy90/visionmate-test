import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

const UserInfoError: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>icon</Text>
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
  },
});
