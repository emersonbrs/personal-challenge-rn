import { StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_500Medium, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

import theme from '@theme/index';
import { Home } from '@screens/Home';

export default function App() {
  const [fontLoad] = useFonts({ Roboto_500Medium, Roboto_700Bold, Roboto_400Regular });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {fontLoad ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
