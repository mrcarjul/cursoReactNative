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
 * Manejo de Animaciones en Secuencia
 */
class Practica3 extends React.Component {
  state = {
    animation: new Animated.Value(0)
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 2,
        duration: 300
      }).start();
    });
  };

  render() {
    const animatedInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 300, 0]
    });

    const translateXInterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 30, 50, 80, 100, 150],
      outputRange: [0, -30, 50, -80, 300, -150]
    });

    const translateYInterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 30, 50],
      outputRange: [0, -30, 50]
    });

    const animatedStyles = {
      transform: [
        { translateX: translateXInterpolate },
        { translateY: translateYInterpolate }
      ]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "tomato"
  }
});

export default Practica3;
