import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Keypair } from '@solana/web3.js';

import { IWallet } from './wallet.type';

export type TProjectStatusStore = {
  wallet?: IWallet | null;
  balance?: number;
  fromKeypair?: Keypair;
  rateToUsd?: number;
  setWallet: (wallet: IWallet | null) => void;
  setBalance: (balance: number) => void;
  setFromKeypair: (fromKeypair: Keypair) => void;
  setRateToUsd: (rate: number) => void;
};

export const useWalletStore = create<TProjectStatusStore>()(
  devtools(
    immer((set) => ({
      wallet: undefined,
      balance: undefined,
      fromKeypair: undefined,
      rateToUsd: undefined,

      setWallet: (wallet: IWallet | null) =>
        set((state) => {
          state.wallet = wallet;
        }),
      setBalance: (balance: number) =>
        set((state) => {
          state.balance = balance;
        }),
      setFromKeypair: (fromKeypair: Keypair) =>
        set((state) => {
          state.fromKeypair = fromKeypair;
        }),
      setRateToUsd: (rate: number) =>
        set((state) => {
          state.rateToUsd = rate;
        }),
    })),
  ),
);

export const useWallet = () => useWalletStore((state) => state);
