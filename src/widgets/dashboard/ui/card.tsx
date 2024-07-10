import { clsx } from 'clsx';

import { CopyButton } from '@/src/shared/ui/copy-button';
import { Flex } from '@/src/shared/ui/flex';
import { Text } from '@/src/shared/ui/text';

type Props = {
  title: string;
  desription: string;
  copyValue: string;
  isItalic?: boolean;
};

export const DashboardCard = ({
  title,
  desription,
  copyValue,
  isItalic = false,
}: Props) => {
  const descriptionClassnames = clsx('break-all', {
    italic: isItalic,
  });

  return (
    <Flex col className='border-1 border-divider rounded-2xl p-4'>
      <Flex center className='justify-between'>
        <Text size={24} weight={600}>
          {title}
        </Text>
        <CopyButton copyText={copyValue} size='sm' />
      </Flex>

      <Text
        className={descriptionClassnames}
        opacity={0.5}
        size={16}
        weight={500}
      >
        {desription}
      </Text>
    </Flex>
  );
};
