import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';

import { useList } from '@hooks/useList';

export function Routes(){
    const { getList } = useList();

    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}