import { CheckCircle } from '@phosphor-icons/react';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

import { Flex } from '@/src/shared/ui/flex';
import { Text } from '@/src/shared/ui/text';
import { MotionLayout } from '@/src/shared/ui/motion-layout';

export const SendTokensSuccessPage = () => {
  return (
    <MotionLayout
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
    >
      <Flex center col className='max-w-96'>
        <CheckCircle className='text-success' size={90} />
        <Flex center col gap={0}>
          <Text className='text-success' size={20}>
            Успех!
          </Text>
          <Text opacity={0.5} size={16}>
            Перевод успешно доставлен.
          </Text>
        </Flex>

        <Button as={Link} className='mt-2' href='/'>
          Вернуться в кошелек
        </Button>
      </Flex>
    </MotionLayout>
  );
};
