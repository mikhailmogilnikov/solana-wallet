'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

import { HomeSkeleton } from './skeleton';

import { useWallet } from '@/src/entities/wallet';
import { Flex } from '@/src/shared/ui/flex';
import { Dashboard } from '@/src/widgets/dashboard';
import { Text } from '@/src/shared/ui/text';

export const HomePage = () => {
  const { wallet } = useWallet();

  if (typeof wallet === 'undefined') return <HomeSkeleton />;

  return wallet ? (
    <Flex col tag='section'>
      <Button fullWidth as={Link} href='/transaction' size='lg'>
        <ArrowRight size={20} weight='bold' />
        Перевести
      </Button>
      <Dashboard />
    </Flex>
  ) : (
    <Flex center col className='mt-10' gap={0}>
      <Text size={20}>У вас пока нет кошелька</Text>
      <Text opacity={0.5} size={15}>
        Сгенерируйте его, нажав на кнопку сверху
      </Text>
    </Flex>
  );
};
