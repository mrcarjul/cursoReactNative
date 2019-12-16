import React, { useState, useEffect } from "react";

// Core
import { StatusBar, StyleSheet, View } from "react-native";

// Components
import Navigation from "./src/navigation";
import Loading from "./src/components/Loading";

// Expo
import { Notifications } from "expo";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
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
    const hasPermissionForLocal = getDeviceNotificationsPermission();
    if (hasPermissionForLocal) {
      sendLocalNotification();
    }
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

  // Revisamos si el usuario nos permite mandar notificaciones locales
  const getDeviceNotificationsPermission = () => {
    return Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS).then(
      ({ status }) => {
        console.log("status", status);
        return status === "granted";
      }
    );
  };

  // Envia notificacion Local
  const sendLocalNotification = () => {
    Notifications.presentLocalNotificationAsync({
      title: "Hola Notificación Local",
      body: "Cuerpo de la Notificación"
    });
  };

  // Envia notificaciones apartir de los 10 segundos en que se levanta la app y los repite cada minuto
  const sendScheduledNotification = () => {
    Notifications.scheduleLocalNotificationAsync(
      {
        title: "Hola Notificación Programada",
        body: "Cuerpo de la Notificación Programada"
      },
      {
        repeat: "minute",
        time: new Date().getTime() + 10000
      }
    );
  };

  // Cancela todas las notificaciones programadas
  const cancelNotifications = () => {
    Notifications.cancelAllScheduledNotificationsAsync();
  }

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
