import React from "react";

import { Dimensions } from "react-native";

// Navigation
import {
  createAppContainer,
  createDrawerNavigator,
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
import Practica5 from "../practicas/practica5";

import colors from "../utils/colors";

const { width } = Dimensions.get("window");

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Practica1: { screen: Practica1 },
    Practica2: { screen: Practica2 },
    Practica3: { screen: Practica3 },
    Practica4: { screen: Practica4 },
    Geolocalizacion: { screen: Geolocalizacion },
    Gallery: { screen: Gallery },
    Practica5: { screen: Practica5 }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeBackgroundColor: colors.white,
      activeTintColor: colors.blue
    },
    drawerWidth: width * 0.5
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    Login: { screen: Login },
    Drawer: { screen: Drawer }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(SwitchNavigator);
