import { DashboardSkeleton } from './skeleton';
import { DashboardCard } from './card';

import { useWallet } from '@/src/entities/wallet';
import { Flex } from '@/src/shared/ui/flex';

export const Dashboard = () => {
  const { wallet } = useWallet();

  if (!wallet) return <DashboardSkeleton />;

  return (
    <Flex editable className='flex-col md:flex-row gap-4'>
      <DashboardCard
        copyValue={wallet.publicKey}
        desription={wallet.publicKey}
        title='Адрес кошелька'
      />
      <DashboardCard
        isItalic
        copyValue={wallet.privateKey}
        desription='Приватный ключ скрыт, но Вы можете его скопировать.'
        title='Приватный ключ'
      />
    </Flex>
  );
};
