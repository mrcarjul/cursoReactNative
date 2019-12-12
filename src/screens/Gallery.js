import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View
} from "react-native";

// Styles
import customStyles from "../utils/styles";
import colors from "../utils/colors";

function Gallery() {
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  ...customStyles,
  text: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 10
  }
});

export default Gallery;
