import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import colors from "../utils/colors";
import LottieView from "lottie-react-native";

class Loading extends React.Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  */

  animate = () => {
    this.animation.play();
  };

  toggleModal = () => {
    // this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType='slide'
          visible={this.props.visible}
          onShow={this.animate}
        >
          <View
            style={[styles.centerContents, { backgroundColor: colors.blue }]}
          >
            <LottieView
              ref={animation => {
                this.animation = animation;
              }}
              source={require("../assets/animation.json")}
            />
          </View>
        </Modal>
        {/*<View style={styles.centerContents}>
          <TouchableHighlight
            onPress={this.toggleModal}
            style={[styles.button, styles.centerContents, { flex: 0 }]}
          >
            <Text style={styles.text}>Mostrar Modal</Text>
          </TouchableHighlight>
            </View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 60,
    backgroundColor: colors.white
  },
  centerContents: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: colors.blue
  },
  text: {
    color: colors.black
  }
});

export default Loading;
