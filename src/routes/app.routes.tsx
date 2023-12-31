import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Details } from '@screens/Details';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
            <Screen 
                name='home'
                component={Home}
            />
            <Screen 
                name='details'
                component={Details}
            />
        </Navigator>
    )
}