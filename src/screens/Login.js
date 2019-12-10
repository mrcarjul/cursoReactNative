import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

// Expo
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

// Personalized components
import Input from "../components/Input";

// Utils
import colors from "../utils/colors";

export default function App() {
  const onLogin = () => {
    console.log("Iniciar sesión");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.blue, colors.lightBlue]}
        style={styles.container}
      >
        <View style={styles.centerContents}>
          <AntDesign name={"rocket1"} size={80} color={colors.black} />
        </View>
        <View style={styles.centerContainer}>
          <Input
            title='Escriba su nombre de usuario'
            placeholder='Correo'
            keyboardType='email-address'
          />
          <Input
            title='Escriba su Contraseña'
            placeholder='Contraseña'
            secureTextEntry
          />
        </View>
        <View style={styles.centerContents}>
          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonTxt}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.darkBlue,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 25
  },
  buttonTxt: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "bold"
  },
  container: {
    flex: 1
  },
  centerContainer: {
    flex: 1,
    marginHorizontal: 15
  },
  centerContents: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  }
});
