import {
  Connection,
  PublicKey,
  clusterApiUrl,
  Keypair,
  LAMPORTS_PER_SOL,
  Transaction,
  SystemProgram,
} from '@solana/web3.js';

import { IWallet } from '../model/wallet.type';

const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

export const createWallet = (): IWallet => {
  const keypair = Keypair.generate();

  return {
    publicKey: keypair.publicKey.toString(),
    privateKey: Buffer.from(keypair.secretKey).toString('hex'),
    keypair: Array.from(keypair.secretKey),
  };
};

export const getBalance = async (publicKey: string): Promise<number> => {
  const balance = await connection.getBalance(new PublicKey(publicKey));

  return balance / LAMPORTS_PER_SOL;
};

export const sendTransaction = async (
  fromKeypair: Keypair,
  toPublicKey: string,
  amount: number,
): Promise<string> => {
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromKeypair.publicKey,
      toPubkey: new PublicKey(toPublicKey),
      lamports: amount * LAMPORTS_PER_SOL,
    }),
  );

  const signature = await connection.sendTransaction(transaction, [
    fromKeypair,
  ]);

  await connection.confirmTransaction(signature);

  return signature;
};
