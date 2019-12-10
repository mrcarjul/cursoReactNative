import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// Expo
import { LinearGradient } from "expo-linear-gradient";

// Personalized components
import Input from "./src/components/Input";

// Utils
import colors from "./src/utils/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.blue, colors.lightBlue]}
        style={styles.container}
      >
        <View style={styles.container} />
        <View style={styles.container}>
          <Input />
          <Text style={styles.text}>Escriba su nombre de usuario</Text>
          <TextInput
            placeholder='Correo'
            placeholderTextColor={colors.black}
            style={styles.textInput}
            keyboardType='email-address'
          />
        </View>
        <View style={styles.container} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
