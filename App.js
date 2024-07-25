import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WalletScreen from './src/screens/WalletScreen';
import SwapScreen from './src/screens/SwapScreen';
import WebScreen from './src/screens/WebScreen';
import OtherScreen from './src/screens/OtherScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Wallet" component={WalletScreen} />
        <Tab.Screen name="Swap" component={SwapScreen} />
        <Tab.Screen name="Web" component={WebScreen} />
        <Tab.Screen name="Other" component={OtherScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}