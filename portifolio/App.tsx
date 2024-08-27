import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useFonts, Montserrat_100Thin, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { ThemeProvider } from 'styled-components/native';
import { ResumeScreen } from './src/screens/ResumeScreen';
import { theme } from './src/styles/theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <ResumeScreen />
    </ThemeProvider>
  );
}
