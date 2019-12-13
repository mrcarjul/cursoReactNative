import React from "react";

// Core
import { StyleSheet, Text, View } from "react-native";

// Expo
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

// Styles
import AppStyles from "../utils/styles";
import colors from "../utils/colors";

function EditText() {
  const [textStyle, setTextStyle] = React.useState({
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  });


  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Text>B</Text>
        <MaterialCommunityIcons
          size={25}
          name='format-font-size-increase'
          color={colors.black}
        />
        <MaterialCommunityIcons
          size={25}
          name='format-font-size-decrease'
          color={colors.black}
        />
        <MaterialIcons
          size={25}
          name='format-align-left'
          color={colors.black}
        />
        <MaterialIcons
          size={25}
          name='format-align-center'
          color={colors.black}
        />
        <MaterialIcons
          size={25}
          name='format-align-left'
          color={colors.black}
        />
      </View>
      <View style={[styles.container, styles.textContainer]}>
        <Text style={textStyle}>Hola</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ...AppStyles,
  bar: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 60
  },
  text: {
    fontSize: 30
  },
  textContainer: {
    justifyContent: "center"
  }
});
