import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";
import colors from "../utils/colors";

/**
 * @description Renderiza un texto y un text input
 * @param {*} props
 * Es un objeto que representa de esta manera
 *  props= {
      placeholder: 'Correo',
      placeholderTextColor: '#FFFFF',
      style: {{ height }},
      keyboardType="email-address",
      title: 'Escriba su nombre de usuario'
    }
 */

export default function Input(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <TextInput
        {...props}
        style={styles.textInput}
        placeholderTextColor={colors.black}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  },
  textInput: {
    backgroundColor: colors.white,
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10
  }
});
