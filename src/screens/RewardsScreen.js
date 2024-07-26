import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RewardsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rewards Screen</Text>
      {/* Add rewards functionalities here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default RewardsScreen;