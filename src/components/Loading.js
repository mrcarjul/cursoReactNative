import React from "react";
import {
  ActivityIndicator,
  Modal,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import colors from "../utils/colors";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  toggleModal = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <View>
        <Modal animationType='slide' visible={this.state.visible}>
          <View>
            <ActivityIndicator color={colors.black} size='large' />
          </View>
        </Modal>
        <TouchableHighlight onPress={this.toggleModal} >
          <Text>Mostrar Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
