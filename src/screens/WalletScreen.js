import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WalletScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Wallet Screen</Text>
      {/* Add wallet functionalities here */}
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

export default WalletScreen;