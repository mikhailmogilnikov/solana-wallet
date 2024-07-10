import { Skeleton } from '@nextui-org/skeleton';

import { Flex } from '@/src/shared/ui/flex';
import { DashboardSkeleton } from '@/src/widgets/dashboard';

export const HomeSkeleton = () => {
  return (
    <Flex col>
      <Skeleton className='w-full h-12 rounded-large' />
      <DashboardSkeleton />
    </Flex>
  );
};
