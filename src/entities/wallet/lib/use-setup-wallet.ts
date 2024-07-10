import { useEffect } from 'react';
import { Keypair } from '@solana/web3.js';
import axios from 'axios';

import { useWallet } from '../model/wallet-store';
import { IWallet } from '../model/wallet.type';
import { getBalance } from '../api/solana';
import { RATE_URL } from '../config/rate-url';

export const useSetupWallet = () => {
  const { setBalance, setWallet, setFromKeypair, setRateToUsd } = useWallet();

  useEffect(() => {
    const rate = localStorage.getItem('rate');
    const storedWallet = localStorage.getItem('wallet');

    if (!rate) {
      axios.get(RATE_URL).then((response) => {
        localStorage.setItem('rate', response.data.solana.usd);
        setRateToUsd(response.data.solana.usd);
      });
    } else {
      setRateToUsd(Number(rate));
    }

    if (storedWallet) {
      const walletData: IWallet = JSON.parse(storedWallet);

      setWallet(walletData);
      getBalance(walletData.publicKey).then(setBalance);

      const fromKeypair = Keypair.fromSecretKey(
        new Uint8Array(walletData.keypair),
      );

      setFromKeypair(fromKeypair);
    } else {
      setWallet(null);
    }
  }, []);
};
