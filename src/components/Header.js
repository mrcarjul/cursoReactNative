import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Expo
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import customStyles from "../utils/styles";
import colors from "../utils/colors";

function Header({ navigation, title }) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={[styles.container, styles.centerContents]}
        onPress={() => navigation.openDrawer()}
      >
        <MaterialIcons name='menu' color={colors.blue} size={21} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ...customStyles,
  headerContainer: {
    alignItems: "center",
    height: 60,
    flexDirection: "row",
    backgroundColor: colors.white
  },
  text: {
    flex: 4,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  }
});

export default Header;
