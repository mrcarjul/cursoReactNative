import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
import Loading from "./src/components/Loading";

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Navigation screenProps={{ visible, setVisible }} />
      <Loading visible={visible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
