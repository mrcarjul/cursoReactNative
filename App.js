import React, { useState, useEffect } from "react";

// Core
import { StatusBar, StyleSheet, View } from "react-native";

// Components
import Navigation from "./src/navigation";
import Loading from "./src/components/Loading";

// Expo
import { Notifications } from "expo";
import Constants from "expo-constants";
import colors from "./src/utils/colors";

function UteqStatusBar() {
  return (
    <View
      style={{
        backgroundColor: colors.blue,
        height: Constants.statusBarHeight
      }}
    >
      <StatusBar translucent barStyle='light-content' />
    </View>
  );
}

export default function App() {
  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState({});

  useEffect(() => {
    const notificationSubscription = Notifications.addListener(
      handleNotification
    );
    /*
    Notifications.presentLocalNotificationAsync({
      title: "Hola Notificación Local",
      body: "Cuerpo de la Notificación"
    }); */
    /*
    Notifications.scheduleLocalNotificationAsync(
      {
        title: "Hola Notificación Programada",
        body: "Cuerpo de la Notificación Programada"
      },
      {
        repeat: "minute",
        time: new Date().getTime() + 10000
      }
    );*/
  }, []);

  const handleNotification = not => {
    console.log(JSON.stringify(not));
    debugger;
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
      <UteqStatusBar />
      <Navigation screenProps={{ visible, setVisible, notification }} />
      <Loading visible={visible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
