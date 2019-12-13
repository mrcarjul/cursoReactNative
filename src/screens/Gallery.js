import React, { useState, useEffect } from "react";
import { Alert, Button, Image, Platform, StyleSheet, View } from "react-native";

// Expo
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

// Styles
import customStyles from "../utils/styles";
import colors from "../utils/colors";

function Gallery() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    async function getPermissionsAsync() {
      if (Platform.OS === "ios") {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== "granted") {
          Alert.alert(
            "Ups",
            "Lo sentimos, no tengo permiso para acceder a la galeria de fotos",
            [{ text: "Entendido", onPress: () => {} }],
            {
              cancelable: false
            }
          );
        }
      }
    }
    getPermissionsAsync();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={[styles.container, styles.centerContents]}>
      <Button title='Tomar una imagen de la galeria' onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ height: 200, width: 200 }} />
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

export default Gallery;
