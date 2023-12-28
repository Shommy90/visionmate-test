import {Pressable, StyleSheet, Text} from 'react-native';
import React, {FC} from 'react';
import color from '../styles/colors';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({text, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [{top: pressed ? 5 : 0}, styles.button]}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.secondary,
    marginVertical: 10,
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: color.shadow,
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    fontSize: 20,
    color: color.primary,
  },
});
