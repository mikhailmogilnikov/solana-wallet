import { Button } from '@nextui-org/button';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { ChangeEventHandler } from 'react';

import { useWallet } from '@/src/entities/wallet';
import { Flex } from '@/src/shared/ui/flex';
import { Text } from '@/src/shared/ui/text';

type Props = {
  amount: string;
  setAmount: (value: string) => void;
  onPress: VoidFunction;
};

export const SendTokensAmountStage = ({
  amount,
  setAmount,
  onPress,
}: Props) => {
  const { rateToUsd, balance } = useWallet();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <Flex col className='max-w-96'>
      <Text>Сумма транзакции (SOL)</Text>
      <input
        className='bg-transparent text-5xl outline-none font-semibold'
        placeholder='0 SOL'
        value={amount}
        onChange={handleChange}
      />
      {rateToUsd && (
        <Text opacity={0.5} weight={500}>
          ~ ${rateToUsd * Number(amount)}
        </Text>
      )}
      <Button
        className='font-medium'
        isDisabled={Number(amount) === 0 || Number(amount) > (balance || 0)}
        onPress={onPress}
      >
        <ArrowRight size={20} weight='bold' />
        Отправить
      </Button>
    </Flex>
  );
};
