import React from "react";

// Navigation
import {
  createDrawerNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

// Screens
import Login from "../screens/Login";
import Home from "../screens/Home";
import Geolocalizacion from "../screens/Geolocalizacion";
import Gallery from "../screens/Gallery";

// Practicas
import Practica1 from "../practicas/practica1";
import Practica2 from "../practicas/practica2";
import Practica3 from "../practicas/practica3";
import Practica4 from "../practicas/practica4";

// Todo Configuracion del drawer

const SwitchNavigator = createSwitchNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    Practica1: { screen: Practica1 },
    Practica2: { screen: Practica2 },
    Practica3: { screen: Practica3 },
    Practica4: { screen: Practica4 },
    Geolocalizacion: { screen: Geolocalizacion },
    Gallery: { screen: Gallery }
  },
  {
    initialRouteName: "Gallery"
  }
);

export default createAppContainer(SwitchNavigator);
