import axios from 'axios';

// Define the base URL for your API
const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

const ApiService = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Example function to get wallet data
export const getWalletData = async (walletAddress) => {
  try {
    const response = await ApiService.get(`/wallet/${walletAddress}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching wallet data:', error);
    throw error;
  }
};

// Example function to perform a token swap
export const swapTokens = async (fromToken, toToken, amount) => {
  try {
    const response = await ApiService.post('/swap', {
      fromToken,
      toToken,
      amount,
    });
    return response.data;
  } catch (error) {
    console.error('Error swapping tokens:', error);
    throw error;
  }
};

export default ApiService;