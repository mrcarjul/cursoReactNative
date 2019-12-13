import React from "react";

import { Dimensions } from "react-native";

// Navigation
import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

// Screens
import Login from "../screens/Login";
import Home from "../screens/Home";
import Geolocalizacion from "../screens/Geolocalizacion";
import Gallery from "../screens/Gallery";
import Listas from "../screens/Listas";

// Practicas
import Practica1 from "../practicas/practica1";
import Practica2 from "../practicas/practica2";
import Practica3 from "../practicas/practica3";
import Practica4 from "../practicas/practica4";
import Practica5 from "../practicas/practica5";

import colors from "../utils/colors";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const TabNavigator = createBottomTabNavigator(
  {
    Practica1: { screen: Practica1 },
    Practica2: { screen: Practica2 },
    Practica3: { screen: Practica3 },
    Practica4: { screen: Practica4 },
    Practica5: { screen: Practica5 }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        const IconComponent = MaterialCommunityIcons;
        let iconName;
        if (routeName === "Practica1") {
          iconName = `animation`;
        } else if (routeName === "Practica2") {
          iconName = `animation-outline`;
        } else if (routeName === "Practica3") {
          iconName = `animation-play`;
        } else if (routeName === "Practica4") {
          iconName = `animation-play-outline`;
        } else if (routeName === "Practica5") {
          iconName = `adjust`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Dashboard",
        drawerIcon: (
          <MaterialIcons name='dashboard' size={21} color={colors.white} />
        )
      }
    },
    Geolocalizacion: { screen: Geolocalizacion },
    Gallery: { screen: Gallery },
    Practicas: { screen: TabNavigator },
    Listas: { screen: Listas }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeBackgroundColor: colors.black,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.white
    },
    drawerBackgroundColor: colors.gray,
    drawerWidth: width * 0.5,
    drawerPosition: "right",
    labelStyle: {
      fontSize: 21,
      fontWeight: "bold"
    }
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
