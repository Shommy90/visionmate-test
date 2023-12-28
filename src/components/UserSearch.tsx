import {StyleSheet, TextInput} from 'react-native';
import React, {FC} from 'react';
import color from '../styles/colors';

interface UserSearchProps {
  searchInput: string;
  handleSearch: (text: string) => void;
}

const UserSearch: FC<UserSearchProps> = ({searchInput, handleSearch}) => {
  return (
    <TextInput
      placeholder="Search user..."
      value={searchInput}
      onChangeText={handleSearch}
      style={styles.textInput}
    />
  );
};

export default UserSearch;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: `${color.lighter}BF`,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
