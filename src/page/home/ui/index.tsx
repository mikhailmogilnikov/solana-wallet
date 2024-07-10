'use client';

import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react';

import { HomeSkeleton } from './skeleton';

import { useWallet } from '@/src/entities/wallet';
import { Flex } from '@/src/shared/ui/flex';
import { Dashboard } from '@/src/widgets/dashboard';

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
    <Flex>Создайте кошелек</Flex>
  );
};
