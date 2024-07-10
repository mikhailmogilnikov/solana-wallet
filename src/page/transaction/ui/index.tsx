'use client';

import { Keypair } from '@solana/web3.js';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getBalance, sendTransaction, IWallet } from '@/src/entities/wallet';

export const TransactionPage = () => {
  const router = useRouter();

  const [amount, setAmount] = useState<string>('');
  const [toAddress, setToAddress] = useState<string>('');
  const [balance, setBalance] = useState<number>(0);
  const [fromKeypair, setFromKeypair] = useState<Keypair | null>(null);

  useEffect(() => {
    const storedWallet = localStorage.getItem('wallet');

    if (storedWallet) {
      const walletData: IWallet = JSON.parse(storedWallet);
      const keypair = Keypair.fromSecretKey(new Uint8Array(walletData.keypair));

      setFromKeypair(keypair);
      getBalance(walletData.publicKey).then(setBalance);
    } else {
      router.push('/');
    }
  }, [router]);

  const handleSendTransaction = async () => {
    if (fromKeypair && toAddress && amount) {
      await sendTransaction(fromKeypair, toAddress, parseFloat(amount));
      setBalance(await getBalance(fromKeypair.publicKey.toString()));
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder='Кол-во SOL'
          type='text'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          placeholder='Адрес кошелька'
          type='text'
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        />
        <button onClick={handleSendTransaction}>Отправить</button>
      </div>
    </div>
  );
};
