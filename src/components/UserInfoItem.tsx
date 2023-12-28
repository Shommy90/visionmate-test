import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import color from '../styles/colors';

interface UserInfoItemProps {
  label: string;
  text: string | number;
}

const UserInfoItem: FC<UserInfoItemProps> = ({label, text}) => {
  return (
    <View style={styles.info}>
      <View style={styles.infoItem}>
        <View style={styles.infoContent}>
          <Text style={styles.infoLabel}>{label}</Text>
          <Text style={styles.infoText}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfoItem;

const styles = StyleSheet.create({
  info: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  infoItem: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: color.light,
    paddingVertical: 10,
  },
  infoContent: {},
  iconContainer: {
    marginRight: 10,
  },
  infoLabel: {
    color: color.textSecondary,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 18,
    fontWeight: '500',
    color: color.text,
  },
});
