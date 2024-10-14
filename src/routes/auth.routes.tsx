import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Reports from '../pages/Reports';

const Tab = createBottomTabNavigator();

export default function AuthRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Reports" component={Reports} />
        </Tab.Navigator>
    );
}
