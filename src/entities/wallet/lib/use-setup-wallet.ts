import { useEffect } from 'react';
import { Keypair } from '@solana/web3.js';

import { useWallet } from '../model/wallet-store';
import { IWallet } from '../model/wallet.type';
import { getBalance } from '../api/solana';

export const useSetupWallet = () => {
  const { setBalance, setWallet, setFromKeypair } = useWallet();

  useEffect(() => {
    const storedWallet = localStorage.getItem('wallet');

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
