import React from "react";
import { AppRegistry } from "react-native";
import AppMainStack from "./src/navigation/AppMainStack";

const App = () => <AppMainStack />;

AppRegistry.registerComponent("LankanHotels", () => App);
