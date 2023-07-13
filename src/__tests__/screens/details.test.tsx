import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { CSGOContextProvider } from '@contexts/CSGOContext';

import theme from '@theme/index';
import { ThemeProvider } from 'styled-components/native';

import { Details } from '@screens/Details';

test('check if screen <Details /> are correctly working', () => {
    render(
        <ThemeProvider theme={theme}>
            <CSGOContextProvider>
                <NavigationContainer>
                    <Details />
                </NavigationContainer>
            </CSGOContextProvider>
        </ThemeProvider>
    );
});