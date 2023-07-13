import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';

import { CSGOContext } from '@contexts/CSGOContext'

export function Routes(){
    const contextData = useContext(CSGOContext);

    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}