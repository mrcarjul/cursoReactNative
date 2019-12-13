import React from "react";

// Core
import { StyleSheet, Text, View } from "react-native";

// Expo
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

// Styles
import AppStyles from "../utils/styles";
import colors from "../utils/colors";

function Practica5() {
  const [textStyle, setTextStyle] = React.useState({
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  });

  const updateStyle = (prop, value) => {
    setTextStyle({
      ...textStyle,
      [prop]: value
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Text
          onPress={() =>
            updateStyle(
              "fontWeight",
              textStyle.fontWeight === "bold" ? "normal" : "bold"
            )
          }
          style={{ fontSize: 24 }}
        >
          B
        </Text>
        <MaterialCommunityIcons
          size={26}
          name='format-font-size-increase'
          color={colors.black}
          onPress={() => updateStyle("fontSize", textStyle.fontSize + 1)}
        />
        <MaterialCommunityIcons
          size={26}
          name='format-font-size-decrease'
          color={colors.black}
          onPress={() => updateStyle("fontSize", textStyle.fontSize - 1)}
        />
        <MaterialIcons
          size={25}
          name='format-align-left'
          color={colors.black}
          onPress={() => updateStyle("textAlign", "left")}
        />
        <MaterialIcons
          size={25}
          name='format-align-center'
          color={colors.black}
          onPress={() => updateStyle("textAlign", "center")}
        />
        <MaterialIcons
          size={25}
          name='format-align-right'
          color={colors.black}
          onPress={() => updateStyle("textAlign", "right")}
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
    alignItems: "center",
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    flexDirection: "row",
    height: 60,
    justifyContent: "space-around"
  },
  text: {
    fontSize: 30
  },
  textContainer: {
    justifyContent: "center"
  }
});

export default Practica5;
