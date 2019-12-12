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
 * Manejo de Animaciones en paralelo
 */
class Practica1 extends React.Component {
  state = {
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1)
  };

  handlePress = () => {
    Animated.parallel([
      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 1000
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 700
      })
    ]).start(this.handleInitial);
  };

  handleInitial = () => {
    Animated.parallel([
      Animated.timing(this.state.colorAnimation, {
        toValue: 0,
        duration: 1000
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 1,
        duration: 700
      })
    ]).start();
  };

  render() {
    const backgroundColorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(255,99,71)", "rgb(99, 71, 255)"]
    });
    const boxStyle = {
      backgroundColor: backgroundColorInterpolate,
      transform: [
        {
          scale: this.state.scaleAnimation
        }
      ]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animated.View style={[styles.box, boxStyle]}>
            <Text style={styles.text}>Hola Parallel</Text>
          </Animated.View>
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
    alignItems: "center",
    height: 150,
    justifyContent: "center",
    width: 150
  },
  text: {
    color: colors.white
  }
});

export default Practica1;
