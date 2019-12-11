import React, { useState } from "react";
import { Switch, StyleSheet, View } from "react-native";
import Login from "./src/screens/Login";
import Loading from "./src/components/Loading";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Loading visible={visible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
