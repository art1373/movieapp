import React from "react";
import { TextInput } from "react-native";
import { Colors } from "App/Theme";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import styles from "./TextInputStyles";

const Input = ({ value, onChangeText }) => {
  return (
    <>
      <EvilIcon
        style={styles.icon}
        name="search"
        size={25}
        color={Colors.pencil}
      />

      <TextInput
        placeholder="Search"
        style={styles.inputContainer}
        onChangeText={onChangeText}
        value={value}
      />
    </>
  );
};

export default Input;
