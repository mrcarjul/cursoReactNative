import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

// Utils
import colors from "../utils/colors";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/backgroundImage.jpeg")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={[styles.container, styles.centerContents]}>
            <Text style={styles.title}>Bienvenido</Text>
          </View>
          <View style={[styles.container, styles.centerContents]}>
            <Image
              source={{
                uri: "https://www.titecnoeducacion.com.mx/images/imgs/Logo.png"
              }}
              style={{
                width: 150,
                height: 60,
              }}
            />
          </View>
          <View style={styles.container}></View>
          <View style={styles.container}></View>
        </ImageBackground>
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
