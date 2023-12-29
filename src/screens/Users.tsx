import {
  FlatList,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import useGlobalState from '../hooks/use-global-state';
import UserCard from '../components/UserCard';
import {useNavigation} from '@react-navigation/native';
import {User} from '../types/User';
import UserSearch from '../components/UserSearch';
import color from '../styles/colors';

const Users: FC = () => {
  const {users} = useGlobalState();
  const navigation = useNavigation();

  const [userList, setUserList] = useState<User[] | null>(null);
  const [searchInput, setSearchInput] = useState<string>('');
  const [switchEnabled, setSwitchEnabled] = useState<boolean>(false);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  const handleSearch = (text: string) => {
    setSearchInput(text);

    const searchKeywords = text.toLowerCase().split(' ');

    const filteredUsers = users?.filter(user => {
      return searchKeywords.every(
        keyword =>
          user.name.first.toLowerCase().includes(keyword) ||
          user.location.city.toLowerCase().includes(keyword),
      );
    });

    setUserList(filteredUsers as User[]);
  };

  const toggleSwitch = () => setSwitchEnabled(prevState => !prevState);

  if (!users) {
    return <Text style={styles.noUsersText}>No users found</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        keyExtractor={item => item.login.uuid}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          const {picture, name, location, email, login} = item;

          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.itemContainer}
              onPress={() =>
                navigation.navigate({
                  name: 'User',
                  params: {user: {picture, name, location, login}},
                } as never)
              }>
              <UserCard
                picture={picture.thumbnail}
                name={name}
                city={location.city}
                email={email}
                index={index + 1}
                switchEnabled={switchEnabled}
              />
            </TouchableOpacity>
          );
        }}
        ListHeaderComponent={
          <View style={styles.listHeaderContainer}>
            <UserSearch searchInput={searchInput} handleSearch={handleSearch} />

            <View style={styles.switchContainer}>
              <Text style={styles.switchText}>Show background color</Text>
              <Switch value={switchEnabled} onValueChange={toggleSwitch} />
            </View>
          </View>
        }
        ListFooterComponent={<View style={styles.listFooter} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    marginBottom: 10,
    marginHorizontal: 20,
  },
  noUsersText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  switchText: {
    marginRight: 10,
    color: color.textSecondary,
  },
  switchContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  listHeaderContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  listFooter: {
    height: 50,
  },
});

export default Users;
