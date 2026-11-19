import React from 'react';
import { StatusBar } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle="auto" />
      <WelcomeScreen />
    </>
  );
}
