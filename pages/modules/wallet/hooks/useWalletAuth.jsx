import { useState } from 'react';
import { ComethProvider, ComethWallet, ConnectAdaptor, SupportedNetworks } from '@cometh/connect-sdk';
import { useWalletContext } from './useWalletContext';
import { ethers } from 'ethers';
import countContractAbi from '../../contract/counterABI.json';

export function useWalletAuth() {
  const {
    setWallet,
    setProvider,
    wallet,
    counterContract,
    setCounterContract,
  } = useWalletContext();
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionError, setConnectionError] = useState(null);

  const apiKey = process.env.NEXT_PUBLIC_COMETH_API_KEY;
  const COUNTER_CONTRACT_ADDRESS = '0x3633A1bE570fBD902D10aC6ADd65BB11FC914624';

  function displayError(message) {
    setConnectionError(message);
  }

  async function connect() {
    if (!apiKey) throw new Error('no apiKey provided');
    setIsConnecting(true);
    try {
      const walletAdaptor = new ConnectAdaptor({
        chainId: SupportedNetworks.MUMBAI,
        apiKey,
      });

      const instance = new ComethWallet({
        authAdapter: walletAdaptor,
        apiKey,
      });

      const localStorageAddress = window.localStorage.getItem('walletAddress');

      if (localStorageAddress) {
        await instance.connect(localStorageAddress);
      } else {
        await instance.connect();
        const walletAddress = await instance.getAddress();
        window.localStorage.setItem('walletAddress', walletAddress);
      }

      const instanceProvider = new ComethProvider(instance);

      const contract = new ethers.Contract(
        COUNTER_CONTRACT_ADDRESS,
        count
      )}
    }
  }
