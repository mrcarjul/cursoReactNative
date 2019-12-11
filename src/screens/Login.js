import React, { useState } from "react";
import {
  Platform,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";

// Expo
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

// Personalized components
import Input from "../components/Input";

// Utils
import colors from "../utils/colors";

const PlatformColors =
  Platform.OS === "ios"
    ? [colors.black, colors.white]
    : [colors.blue, colors.lightBlue];

export default function Login({ navigation }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log("correo: ", correo);
    console.log("password: ", password);
    const { visible, setVisible } = navigation.getScreenProps();
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      navigation.navigate("Home");
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={PlatformColors} style={styles.container}>
        <View style={styles.centerContents}>
          <AntDesign name={"rocket1"} size={80} color={colors.black} />
        </View>
        <View style={styles.centerContainer}>
          <Input
            title='Escriba su nombre de usuario'
            placeholder='Correo'
            keyboardType='email-address'
            value={correo}
            onChangeText={text => setCorreo(text)}
          />
          <Input
            title='Escriba su Contraseña'
            placeholder='Contraseña'
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
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
