import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, ThemeProvider, Header } from 'react-native-elements';

// components 
import StartGameScreen from './components/StartGameScreen';

const theme = {
  Button: {
    raised: true,
  },
};

const App = () => {
  return (
    <ThemeProvider>
      <Header
       leftComponent={{ icon: 'menu', color: '#fff' }}
       centerComponent={{ text: 'Guess A Number', style: { color: '#fff' } }}
       rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <StartGameScreen />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
