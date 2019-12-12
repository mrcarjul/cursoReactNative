import React, { useState, useEffect } from "react";

// Core
import { StyleSheet, View } from "react-native";

// Components
import Navigation from "./src/navigation";
import Loading from "./src/components/Loading";

// Expo
import { Notifications } from "expo";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    const notificationSubscription = Notifications.addListener(
      handleNotification
    );
  }, []);

  const handleNotification = not => {
    console.log(JSON.stringify(not));
    /* {
      data: {
        visible: true,
        value: 1
      },
      ...
    } */
    setNotification(not);
  };

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
