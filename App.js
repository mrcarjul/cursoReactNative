import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./src/screens/Login";
import Loading from "./src/components/Loading";

export default function App() {
  return (
    <View style={styles.container}>
      <Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
