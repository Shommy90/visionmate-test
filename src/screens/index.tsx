import {StyleSheet, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import useGlobalState from '../hooks/use-global-state';
import {getRandomUser} from '../helpers/random-user';
import {User} from '../types/User';
import Button from '../components/Button';
import {HomeScreenProp} from '../types/navigation';

const Home: FC = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const {users} = useGlobalState();

  const handleRandomizeUser = useCallback(() => {
    const randomUser = getRandomUser(users as User[]);

    navigation.navigate({
      name: 'User',
      params: {user: randomUser},
    } as never);
  }, [navigation, users]);

  return (
    <View style={styles.container}>
      <Button
        text={'Users List'}
        onPress={() => navigation.navigate('Users')}
      />
      <Button text={'Randomize User'} onPress={handleRandomizeUser} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
