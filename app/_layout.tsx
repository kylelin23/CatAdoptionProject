import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState, useContext } from 'react';
import 'react-native-reanimated';

import PhaseContext, { PhaseContextType } from '@/context/PhaseContext';
import { PhaseProvider } from '@/context/PhaseProvider';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import { StyleSheet, SafeAreaView } from 'react-native';
import MainContent from './mainContent/Home';
import NavBar from './navBar/_layout';
import { Phase } from '../constants/content'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function Root() {
  const { phase, setPhase } = useContext<PhaseContextType>(PhaseContext);

  return (
    <SafeAreaView style = {{height: '100%', backgroundColor: 'rgb(139, 223, 232)'}}>
      <View style = {styles.screen}>
        <View style = {styles.mainContent}>
          <MainContent phase={phase}/>
        </View>
        <View style = {styles.navBar}>
          <NavBar onTapHandler={(selectedPhase: Phase) => setPhase(selectedPhase)} />
        </View>
      </View>
    </SafeAreaView>
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
  },

  navBar: {
    justifyContent: 'flex-end',
    width: '100%', 
    bottom: 0,
  }

});