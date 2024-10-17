import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from "../pages/Home/router/HomeStack";
import Profile from '../pages/Profile';

import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function AuthRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#808080',
                tabBarLabelStyle: { fontSize: 12 },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStack}  // Stack de navegação da Home
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-circle" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
