import React from "react";
import { Text, TextInput, StyleSheet, View } from "react-native";

/**
 * @description Renderiza iun texto y un text input
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
    <View>
      <Text style={styles.text}>{props.title}</Text>
      <TextInput {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold"
  },
  textInput: {
    backgroundColor: colors.white,
    height: 40,
    marginTop: 10
  }
});
