import { Skeleton } from '@nextui-org/skeleton';

import { useWallet } from '../model/wallet-store';

import { Text } from '@/src/shared/ui/text';
import { Flex } from '@/src/shared/ui/flex';

export const Balance = () => {
  const { wallet, balance, rateToUsd } = useWallet();

  if (typeof wallet === 'undefined' && typeof balance === 'undefined') {
    return (
      <Flex center col gap={2}>
        <Text className='leading-3' tag='h2' weight={600}>
          Баланс
        </Text>
        <Skeleton className='w-16 h-3 rounded-md' />
      </Flex>
    );
  }

  return (
    <Flex center col gap={2}>
      <Text className='leading-3' tag='h1' weight={600}>
        Баланс
      </Text>

      {wallet ? (
        <Text
          className='leading-3 text-center text-nowrap'
          opacity={0.5}
          size={15}
          tag='h2'
        >
          {balance} SOL{' '}
          {rateToUsd && balance ? <span>~ ${balance * rateToUsd}</span> : null}
        </Text>
      ) : (
        <Text
          className='leading-3 italic text-center text-nowrap'
          opacity={0.5}
          size={15}
          tag='h2'
        >
          Создайте кошелек
        </Text>
      )}
    </Flex>
  );
};
