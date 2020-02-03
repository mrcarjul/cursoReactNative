import React, { Component } from "react";

// Core components
import {
  Animated,
  Easing,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getFloorFromRandom() {
  return Math.floor(Math.random() * getRandomArbitrary(0, 255));
}

class ExtraAnimation extends Component {
  state = {
    colorAnimation: new Animated.Value(0),
    scaleXAnimation: new Animated.Value(50),
    scaleYAnimation: new Animated.Value(50)
  };

  handlePress = () => {
    const randomA = getRandomArbitrary(50, 300);
    const randomB = getRandomArbitrary(50, 300);
    Animated.parallel([
      Animated.timing(this.state.colorAnimation, {
        toValue: getRandomArbitrary(0, 1),
        duration: 200
      }),
      Animated.timing(this.state.scaleXAnimation, {
        toValue: randomA,
        duration: 200,
        easing: Easing.ease
      }),
      Animated.timing(this.state.scaleYAnimation, {
        toValue: randomB,
        duration: 200,
        easing: Easing.ease
      })
    ]).start();
  };

  getRandomRgb = () => {
    const rgb =
      "rgb(" +
      getFloorFromRandom() +
      "," +
      getFloorFromRandom() +
      "," +
      getFloorFromRandom() +
      ")";
    return rgb;
  };

  render() {
    const boxStyle = {
      backgroundColor: this.state.colorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [
          "rgb(" +
            getFloorFromRandom() +
            "," +
            getFloorFromRandom() +
            "," +
            getFloorFromRandom() +
            ")",
          "rgb(" +
            getFloorFromRandom() +
            "," +
            getFloorFromRandom() +
            "," +
            getFloorFromRandom() +
            ")"
        ]
      }),
      height: this.state.scaleYAnimation,
      width: this.state.scaleXAnimation
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animated.View style={[styles.box, boxStyle]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

// Style

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ExtraAnimation;
