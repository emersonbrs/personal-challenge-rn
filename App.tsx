import { ActivityIndicator, StatusBar, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_500Medium, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import theme from '@theme/index';

import { Routes } from './src/routes';

export default function App() {
  const [fontLoad] = useFonts({ Roboto_500Medium, Roboto_700Bold, Roboto_400Regular });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar 
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontLoad ? <Routes /> : <ActivityIndicator />}
      </SafeAreaView>
    </ThemeProvider>
  );
}
