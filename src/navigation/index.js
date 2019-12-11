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

// Todo Configuracion del drawer

const SwitchNavigator = createSwitchNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home }
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(SwitchNavigator);
