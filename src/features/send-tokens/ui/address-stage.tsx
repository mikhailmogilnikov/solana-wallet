import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { CaretRight } from '@phosphor-icons/react';

import { ESendTokensStages } from '../model/stages.enum';

import { Flex } from '@/src/shared/ui/flex';
import { Text } from '@/src/shared/ui/text';

type Props = {
  address: string;
  setAddress: (value: string) => void;
  setStage: (state: ESendTokensStages) => void;
};

export const SendTokensAddressStage = ({
  address,
  setAddress,
  setStage,
}: Props) => {
  return (
    <Flex col className='max-w-96'>
      <Text>Перевести средства</Text>
      <Input
        classNames={{ inputWrapper: '!bg-default' }}
        endContent={
          <Button
            isIconOnly
            color='primary'
            isDisabled={address.length < 10}
            radius='full'
            size='sm'
            onPress={() => setStage(ESendTokensStages.AMOUNT)}
          >
            <CaretRight size={20} weight='bold' />
          </Button>
        }
        placeholder='Адрес кошелька получателя'
        size='lg'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </Flex>
  );
};
