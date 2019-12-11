import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido</Text>
        </View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centerContents: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold"
  }
});

export default Home;