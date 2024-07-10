'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';
import { CaretLeft } from '@phosphor-icons/react';

import { Flex } from '@/src/shared/ui/flex';
import { Balance } from '@/src/entities/wallet';
import { CreateWalletButton } from '@/src/features/create-wallet';

export const Header = () => {
  const pathname = usePathname();
  const { back } = useRouter();

  return (
    <Flex className='h-16 border-b-1 border-b-divider' tag='nav'>
      <Flex center className='max-w-6xl mx-auto px-4'>
        <Flex>
          {pathname === '/transaction' && (
            <Button isIconOnly radius='full' size='sm' onPress={() => back()}>
              <CaretLeft size={20} weight='bold' />
            </Button>
          )}
        </Flex>

        <Flex>
          <Balance />
        </Flex>

        <Flex className='justify-end'>
          {pathname === '/' && <CreateWalletButton />}
        </Flex>
      </Flex>
    </Flex>
  );
};
