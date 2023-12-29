import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import color from '../styles/colors';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface UserInfoItemProps {
  label: string;
  text: string | number;
  icon: string;
}

const UserInfoItem: FC<UserInfoItemProps> = ({icon, label, text}) => {
  return (
    <View style={styles.info}>
      <View style={styles.infoItem}>
        <View style={styles.iconContainer}>
          <EntypoIcon name={icon} size={18} color={color.light} />
        </View>

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
  iconContainer: {
    marginRight: 10,
  },
  infoContent: {},
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
