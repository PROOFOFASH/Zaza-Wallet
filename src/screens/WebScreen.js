import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WebScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Web Screen</Text>
      {/* Add web functionalities here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WebScreen;