import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState, useContext } from 'react';
import 'react-native-reanimated';

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { PhaseProvider } from '@/context/PhaseProvider';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import MainContent from './mainContent/Home';
import NavBar from './navBar/_layout';
import { Phase } from '../constants/content'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function Root() {
  const { phase, setPhase } = useContext<PhaseContextType>(PhaseContext);

  return (
    <View style = {styles.screen}>
      <View style = {styles.mainContent}>
        <MainContent phase={phase}/>
      </View>
      <View style = {styles.navBar}>
        <NavBar onTapHandler={(selectedPhase: Phase) => setPhase(selectedPhase)} />
      </View>
    </View>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PhaseProvider>
        <Root/>
      </PhaseProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }, 

  mainContent: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },

  navBar: {
    height: 60,
    justifyContent: 'flex-end',
    position: 'absolute', 
    width: '100%', 
    bottom: 0,
  }

});