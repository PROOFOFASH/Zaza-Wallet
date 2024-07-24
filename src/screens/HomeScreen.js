import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Zaza Wallet</Text>
      <Button title="Go to Wallet" onPress={() => navigation.navigate('Wallet')} />
    </View>
  );
};

export default HomeScreen;
