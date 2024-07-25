import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SwapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Swap Screen</Text>
      {/* Add swap functionalities here */}
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

export default SwapScreen;