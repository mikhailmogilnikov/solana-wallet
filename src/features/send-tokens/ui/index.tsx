'use client';

import { ReactNode, useState } from 'react';

import { ESendTokensStages } from '../model/stages.enum';

import { SendTokensAddressStage } from './address-stage';
import { SendTokensAmountStage } from './amount-stage';
import { SendTokensSuccessPage } from './success-stage';

import { Flex } from '@/src/shared/ui/flex';
import { getBalance, sendTransaction, useWallet } from '@/src/entities/wallet';

export const SendTokensForm = () => {
  const { fromKeypair, setBalance } = useWallet();

  const [stage, setStage] = useState<ESendTokensStages>(
    ESendTokensStages.ADDRESS,
  );

  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('0');

  const handleSendTransaction = async () => {
    if (fromKeypair && address && amount) {
      await sendTransaction(fromKeypair, address, parseFloat(amount));
      const actualBalance = await getBalance(fromKeypair.publicKey.toString());

      setBalance(actualBalance);
      setStage(ESendTokensStages.SUCCESS);
    }
  };

  const SendTokensStages: Record<ESendTokensStages, ReactNode> = {
    [ESendTokensStages.ADDRESS]: (
      <SendTokensAddressStage
        address={address}
        setAddress={setAddress}
        setStage={setStage}
      />
    ),
    [ESendTokensStages.AMOUNT]: (
      <SendTokensAmountStage
        amount={amount}
        setAmount={setAmount}
        onPress={handleSendTransaction}
      />
    ),
    [ESendTokensStages.SUCCESS]: <SendTokensSuccessPage />,
  };

  return (
    <Flex
      center
      col
      className='w-full h-[calc(100dvh-64px)] justify-center pb-20'
    >
      {SendTokensStages[stage]}
    </Flex>
  );
};
