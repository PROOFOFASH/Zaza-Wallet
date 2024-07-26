import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getWalletData } from '../api/ApiService';

const WalletScreen = () => {
  const [walletData, setWalletData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWalletData('your-wallet-address'); // Replace with dynamic wallet address
        setWalletData(data);
      } catch (error) {
        console.error('Error fetching wallet data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Screen</Text>
      <FlatList
        data={walletData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}: {item.balance}</Text>
          </View>
        )}
      />
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default WalletScreen;