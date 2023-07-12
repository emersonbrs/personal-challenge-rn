import React from 'react';
import { render } from '@testing-library/react-native';

import { Home } from '@screens/Home';

test('check if screen <Home /> are correctly working', () => {
    render(<Home />);
});