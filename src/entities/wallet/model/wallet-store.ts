import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { Keypair } from '@solana/web3.js';

import { IWallet } from './wallet.type';

export type TProjectStatusStore = {
  wallet?: IWallet | null;
  balance?: number;
  fromKeypair?: Keypair;
  setWallet: (wallet: IWallet | null) => void;
  setBalance: (balance: number) => void;
  setFromKeypair: (fromKeypair: Keypair) => void;
};

export const useWalletStore = create<TProjectStatusStore>()(
  devtools(
    immer((set) => ({
      wallet: undefined,
      balance: undefined,
      fromKeypair: undefined,

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
    })),
  ),
);

export const useWallet = () => useWalletStore((state) => state);
