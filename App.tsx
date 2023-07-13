import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_500Medium, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import theme from '@theme/index';

import { Routes } from './src/routes';

import { CSGOContextProvider } from '@contexts/CSGOContext'

export default function App() {
  const [fontLoad] = useFonts({ Roboto_500Medium, Roboto_700Bold, Roboto_400Regular });

  return (
    <ThemeProvider theme={theme}>
      <CSGOContextProvider>
        {fontLoad ? <Routes /> : <ActivityIndicator />}
      </CSGOContextProvider>
    </ThemeProvider>
  );
}
