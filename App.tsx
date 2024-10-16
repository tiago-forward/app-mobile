import React from "react";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import Routes from './src/routes';
// import AuthRoutes from "./src/routes/auth.routes";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1d1d2e" barStyle="dark-content" translucent={false} />
      <Routes />
    </NavigationContainer>
  );
}
