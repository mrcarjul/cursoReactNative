import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from "react-native";

import colors from "../utils/colors";

/**
 * Manejo de Animaciones Nativas
 */
class Practica4 extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -300,
      duration: 1500,
      useNativeDriver: true
    }).start(() => {
      this.state.animation.setValue(0);
    });
    setTimeout(() => {
      let i = 0;
      while(i < 500000000) {
        i++;
      }
    }, 500);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[
              styles.box,
              { transform: [{ translateY: this.state.animation }] }
            ]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "tomato"
  }
});

export default Practica4;
