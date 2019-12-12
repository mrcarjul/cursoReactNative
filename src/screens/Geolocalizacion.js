import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

// Expo
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

// Styles
import customStyles from "../utils/styles";

function Geolocalizacion() {
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function getLocationAsync() {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        setErrorMessage("No se otorgaron los permisos para la localización");
      } else {
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geolocalización</Text>
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  ...customStyles,
  containerB: {
    flex: 3
  }
});

export default Geolocalizacion;
