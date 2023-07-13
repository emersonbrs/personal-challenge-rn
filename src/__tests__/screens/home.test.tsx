import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { CSGOContextProvider } from '@contexts/CSGOContext';

import { Home } from '@screens/Home';

test('check if screen <Home /> are correctly working', () => {
    render(
        <CSGOContextProvider>
            <NavigationContainer>
                <Home />
            </NavigationContainer>
        </CSGOContextProvider>
    );
});