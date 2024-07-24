import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as xrpl from 'xrpl';
import { Connection, PublicKey } from '@solana/web3.js';

const WalletScreen = () => {
  const [xrplAddress, setXrplAddress] = useState('');
  const [solanaAddress, setSolanaAddress] = useState('');

  const generateXrplAddress = async () => {
    const wallet = xrpl.Wallet.generate();
    setXrplAddress(wallet.address);
  };

  const generateSolanaAddress = async () => {
    const connection = new Connection('https://api.mainnet-beta.solana.com');
    const wallet = new PublicKey('INSERT_YOUR_PUBLIC_KEY_HERE');
    setSolanaAddress(wallet.toBase58());
  };

  return (
    <View>
      <Text>XRPL Address: {xrplAddress}</Text>
      <Button title="Generate XRPL Address" onPress={generateXrplAddress} />
      <Text>Solana Address: {solanaAddress}</Text>
      <Button title="Generate Solana Address" onPress={generateSolanaAddress} />
    </View>
  );
};

export default WalletScreen;
