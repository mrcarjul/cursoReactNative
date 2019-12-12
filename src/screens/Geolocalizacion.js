import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

// Expo
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

// Styles
import customStyles from "../utils/styles";
import colors from "../utils/colors";

function RenderLocation({ address, latitude, longitude, onPress }) {
  return (
    <View>
      <Text style={styles.text}>
        latitude: {latitude}
        {"\n"}longitude: {longitude}
      </Text>
      <TouchableHighlight onPress={onPress}>
        <Text style={styles.text}>Obtener Dirección</Text>
      </TouchableHighlight>
      {address && <Text>{JSON.stringify(address)}</Text>}
    </View>
  );
}

function Geolocalizacion() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function getLocationAsync() {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        setErrorMessage("No se otorgaron los permisos para la localización");
      } else {
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        console.log(JSON.stringify(location));
      }
      setLoading(false);
    }
    getLocationAsync();
  }, []);

  /**
   * {"coords":
   *  {
   *    "altitude":0,
   *    "altitudeAccuracy":-1,
   *    "latitude":37.785834,
   *    "accuracy":5,
   *    "longitude":-122.406417,
   *    "heading":-1,
   *    "speed":-1
   * },
   * "timestamp":1576178996909.2932}
   */

  /**
   * location
   * {
   *  latitude,
   *  longitude
   * }
   */
  const reverseGeocode = () => {
    Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }).then(address => {
      setAddress(address);
    });
  };

  const { coords } = location || {};
  const { latitude, longitude } = coords || {};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geolocalización</Text>
      {loading && (
        <View style={[styles.container, styles.centerContents]}>
          <ActivityIndicator size='large' color={colors.black} />
        </View>
      )}
      {!loading && (
        <View style={styles.container}>
          {errorMessage ? (
            <Text>{errorMessage}</Text>
          ) : (
            <RenderLocation
              address={address}
              latitude={latitude}
              longitude={longitude}
              onPress={reverseGeocode}
            />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ...customStyles,
  text: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 10
  }
});

export default Geolocalizacion;
