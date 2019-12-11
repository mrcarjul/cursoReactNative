import React, { useState } from "react";
import { Switch, StyleSheet, View } from "react-native";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Loading from "./src/components/Loading";


export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
