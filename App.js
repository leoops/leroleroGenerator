import React, { Component } from "react";
import Routes from "./src/routes/Routes";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/views/HomeScreen";

const AppContainer = createAppContainer(Routes);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
