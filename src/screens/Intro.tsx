import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

const screens: React.FC = () => {
  return (
    <View testID='container' style={styles.container}>
      <Text testID='welcome-text' style={styles.welcome}>Welcome to React Native!</Text>
      <Text testID='intro-text' style={styles.instructions}>
        This is a React Native snapshot test.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  }
});

export default screens;