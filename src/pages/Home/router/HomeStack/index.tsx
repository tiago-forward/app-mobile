import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../..";

import FolderContent from "../../pages/FolderContent";
// import SubFolder from "../../components/SubFolder";

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            {/* Tela principal com as pastas */}
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            {/* Tela de conteúdo da pasta */}
            <Stack.Screen
                name="FolderContent"
                component={FolderContent}
                options={{ title: "Pasta de relatórios" }}
            />
            {/* Tela de subpasta */}
            {/* <Stack.Screen
                name="SubFolder"
                component={SubFolder}
                options={{ title: "Subpasta" }}
            /> */}
        </Stack.Navigator>
    );
}
